const express = require('express');
const router = express.Router({mergeParams:true});

const Doctor = require('../models/Doctor');
const Appointments = require('../models/Appointment');


router.get('/',(req,res)=>{
    Doctor.findById(req.params.id,(err,doctor)=>{
        if(err){
            res.send(err)
        }else{
            res.render('partials/appointmentList.ejs',{doctor:doctor})
        }
    })
});

router.post('/',  (req,res)=>{
    Doctor.findById(req.params.id,(err,doctor)=>{
        if(err){
            res.send(err)
        }else{
            Appointments.create(req.body,(err,newAppointment)=>{
                if(err){
                    res.send(err)
                }else{
                    newAppointment.firstName = req.body.firstName;
                    newAppointment.lastName = req.body.lastName;
                    newAppointment.time = req.body.time;
                    newAppointment.kind = req.body.kind;
                    newAppointment.save();
                    console.log(newAppointment);
                    doctor.appointments.push(newAppointment);
                    doctor.save();
                    res.redirect('/'+ doctor._id)
                }
            })
        }
    })
});

router.delete("/:id", (req,res)=>{

            Appointments.findByIdAndDelete(req.params.id, (err, deletedAppointment)=>{
                if (err) {
                    res.send(err);
                } else {
                    console.log(deletedAppointment);
                    res.redirect('/');
                }
          });
        
    
});



module.exports= router;