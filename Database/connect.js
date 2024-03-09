const mongoose = require('mongoose');
require('dotenv').config();
const DatabaseUrl = process.env.DatabaseUrl;

try{
    mongoose.connect(DatabaseUrl);
    console.log("Connected to database");
}
catch(error){
    console.log("Unable to connect database");
}

