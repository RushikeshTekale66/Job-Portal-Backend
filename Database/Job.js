const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        require: true
    },
    applyLink:{
        type: String,
        require: true
    },
    date: {type:Date}

});

module.exports = mongoose.model("jobs", jobSchema);