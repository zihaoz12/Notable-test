const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    kind:{
        type:String,
        required:true
    }
})

const Patient =mongoose.model('patients', PatientSchema);
module.exports = Patient