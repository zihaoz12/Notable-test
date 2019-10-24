const express = require('express');
const app 	  = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const PatientController = require('./controllers/patientController');

app.use(require('cors')())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notable', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// app.use('/',PatientController);
const Appointment = mongoose.model('Appointment',new mongoose.Schema({
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
}))

app.get('/',async (req,res)=>{
	res.send('index')
});

app.post('/api/appointments',async (req,res)=>{
  const appointment = await Appointment.create(
    req.body
  )
  res.send(appointment)
})

app.get('/api/appointments', async (req,res)=>{
  const appointments = await Appointment.find()
  res.send(appointments)
})

app.delete('/api/appointments/:id', async (req,res)=>{
  await Appointment.findByIdAndDelete(req.params.id)
  res.send({
    status:true
  })
})
app.listen(port,()=>{
	console.log("App is listening at : ", port);
})