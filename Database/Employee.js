const  mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    position:String,
    password:String
});

module.exports = mongoose.model("employees", employeeSchema);