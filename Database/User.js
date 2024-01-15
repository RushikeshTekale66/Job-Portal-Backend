const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    gender:String,
    dob:Date,
    address:String,
    education:String,
    password:String
});

module.exports = mongoose.model("users", userSchema);