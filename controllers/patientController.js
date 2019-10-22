const express = require('express');
const router = express.Router();
const Patients = require('../models/Patient');



router.get('/',async(req,res)=>{
	const allPatients = await Patients.find({});
	res.render('index.ejs',{
		Patients:allPatients
	})
});


router.post('/',async(req,res)=>{
	const firstName = req.body.firstName;
	const lastName =req.body.lastName;
    const time =req.body.time;
	const kind = req.body.kind;
	const NewPatient = {
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