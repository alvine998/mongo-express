const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:cari1234@cluster0.5afwo.mongodb.net/midland?retryWrites=true&w=majority", {useNewUrlParser: true},
    (err) => {
        if(!err){
            console.log("Success established connection with mongodb")
        }
        else{
            console.log("Failed established Connection with mongoDB with error: " + err)
        }
    }
);

module.exports = mongoose;