
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require('../db/conn.js');
const User = require('../model/userSchema.js');
const DoctorData = require("../model/DoctorData.js");

app.use(express.json())

app.use(require('../router/auth.js'))

const PORT = process.env.PORT;



app.get("/contact", (req, res) => {
  res.cookie("Test", "abhiApp")
  res.send(`hi hello contact`);
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
