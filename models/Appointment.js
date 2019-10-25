const mongoose = require('mongoose');


const Appointment = mongoose.model("Appointment", new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    time:{
        type:String
    },
    kind:{
        type:String
    }
}));


module.exports = Appointment;