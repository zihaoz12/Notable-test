const express = require('express');
const app 	  = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const DoctorController = require('./Controllers/DoctorController');
const AppointmentController = require('./Controllers/AppointmentController');


app.use(require('cors')());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notabletest', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use('/', DoctorController);
app.use('/:id/appointments', AppointmentController);

app.get('/',(req,res)=>{
	res.render('index.ejs')
});



app.listen(port,()=>{
	console.log("App is listening at : ", port);
})