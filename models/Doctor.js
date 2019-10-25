const mongoose = require('mongoose');

const Doctor = mongoose.model("Doctor", new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    appointments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Appointment"
        }
    ]
}));

module.exports = Doctor