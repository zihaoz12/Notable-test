const express = require('express');
const router = express.Router();
const Appointments = require('../models/Appointment');



router.get('/',async(req,res)=>{
	const allAppointments = await Appointments.find({});
	res.render('index.ejs',{
		Appointments:allAppointments
	})
});


router.post('/',async(req,res)=>{
	const firstName = req.body.firstName;
	const lastName =req.body.lastName;
    const time =req.body.time;
	const kind = req.body.kind;
	const NewAppointment = {
		firstName:firstName,
		lastName:lastName,
		time:time,
        kind:kind
	}
	
	try{
		Patients.create(NewPatient,(err,createPatient)=>{
			if(err){
				res.send(err)
			}else{		
				res.redirect('/')
			}
		})
	}catch(error){
		res.send(error)
	}

});


router.delete('/:id',(req,res)=>{
	Patients.findByIdAndRemove(req.params.id,(err,deletePatient)=>{
		if(err){
			res.send(err)
		}else{
			res.redirect('/')
		}
	})
});




module.exports = router;