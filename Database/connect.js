const mongoose = require('mongoose');

try{
    mongoose.connect('mongodb://127.0.0.1:27017/Jobdata');
    console.log("Connected to database");
}
catch(error){
    console.log("Unable to connect database");
}

