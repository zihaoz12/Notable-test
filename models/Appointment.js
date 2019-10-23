const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    time:{
        type:String
    },
    patients:{
        type:Schema.type.ObjectId,
        ref:"patients"
    }
})


const Appointment =mongoose.model('appointments', AppointmentSchema);
module.exports = Appointment