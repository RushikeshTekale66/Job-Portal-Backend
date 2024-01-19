const mongoose = require('mongoose');

try{
    mongoose.connect('mongodb+srv://rushikesh:Rushi7887@cluster0.fllhqkj.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to database");
}
catch(error){
    console.log("Unable to connect database");
}

