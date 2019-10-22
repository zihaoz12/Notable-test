const express = require('express');
const app 	  = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const PatientController = require('./controllers/patientController');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notable', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use('/',PatientController);

app.get('/',(req,res)=>{
	res.render('index.ejs')
});

app.listen(port,()=>{
	console.log("App is listening at : ", port);
})