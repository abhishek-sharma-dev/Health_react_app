const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middelware/authenticate")

require("../db/conn.js");
const User = require("../model/userSchema.js");
const DoctorData = require("../model/DoctorData.js")

router.get("/", (req, res) => {
  res.send(`Hello from server router js`);
});

// Add Doctor Data 
router.post('/Doctordata', (req, res) => {
  const doctorDetail = req.body
  console.log(doctorDetail)
  res.send('Doctor data successfully added')
})

router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill the empty box" });
  }

  try {
    const userExist = await User.findOne({ email: email , password: password});

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }

    const user = new User({ name, email, password, cpassword });

    await user.save();

    res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // res.json({message: "awesome"})
  try {
    let token
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz Filled the Data" });
    }
  const userLogin = await User.findOne({ email: email, password: password });
  
  if (userLogin) {
    const isMatch = bcrypt.compare(password, userLogin.password);
    token = await userLogin.generateAuthtoken();

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    if (!isMatch) {
      res.status(400).json({ error: "Invalid Credential" });
    } else {
      res.json({ message: "user login successfull" });
    }
  } else {
    res.status(400).json({ error: "Invalid Credential" });
  }
  } catch (err) {
    console.log(err);
  }
});



// About us page
router.get("/about", authenticate , (req, res) => {
  res.send(req.rootUser);
});


// getting the user data
router.get("/getdata", authenticate , (req, res) => {
  res.send(req.rootUser);
});


router.get("/login", authenticate , (req, res) => {
  console.log("Logout Page");
  res.status(200).send("Logout done")
  res.clearCookie("jwtoken", { path: "/"})
});
module.exports = router;
