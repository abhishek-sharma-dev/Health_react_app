const mongoose = require("mongoose");

const DoctorDataSchema = mongoose.Schema({
    fname: String,
    lname: String,
    address: String,
    email: String
})

const DoctorData = mongoose.model("DOCTOR", DoctorDataSchema);


module.exports = DoctorData;