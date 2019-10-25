const express = require('express');
const router = express.Router();
const Doctors = require('../models/Doctor');
const Appointment = require('../models/Appointment');

router.get('/',async (req,res)=>{
    const allDoctors = await Doctors.find({});
    res.render('index.ejs',{
        doctors: allDoctors
    })
    console.log(allDoctors)
})


router.post('/',async(req,res)=>{
	const firstName= req.body.firstName;
	const lastName=req.body.lastName;
    const email=req.body.email;
	const newDoctor = {
		firstName:firstName,
		lastName:lastName,
		email:email,
	}
	try{
		Doctors.create(newDoctor,(err,createDoctor)=>{
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
router.get('/:id',async(req,res)=>{
    try{    
        Doctors.findById({_id:req.params.id}).populate("appointments").exec((err,foundDoctor)=>{
            if(err){
                res.send(err)
            }else{
                res.render('Doctor/Doctor.ejs',{
                    doctor:foundDoctor,
                });
            }
        })
    }catch(err){
        res.send(err)
    }
});



module.exports = router;