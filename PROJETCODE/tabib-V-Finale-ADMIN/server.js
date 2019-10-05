const express = require('express');

const path = require('path');

const bodyparser = require('body-parser');

const app = express();

const upload = require('express-fileupload');

//mysql connection


const mysql = require("./Nodejs/config/sequelize");

mysql.authenticate()

.then(()=> console.log("Imedezine Connected"))
.catch(err => console.log(err));

//Upload 

app.use(upload());


//Body parser


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//CSS


app.use('/assets', express.static(__dirname + '/assets'));
app.use('/fontawesome-free-5.10.0-web', express.static(__dirname + '/fontawesome-free-5.10.0-web'));
app.use('/img',express.static('../ImedzineV3/IMG'));
app.use('/ImedzineV3/CSS',express.static('../ImedzineV3/CSS'));

//Engines


app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');


//Routes 

//* const addapointment = require('./Nodejs/add-appointment');
const pharmacys = require('./Nodejs/routes/pharmacys');
const doctors = require('./Nodejs/routes/doctors');
const clinics = require('./Nodejs/routes/clinics');
const patients = require('./Nodejs/routes/patients');
const appointments = require('./Nodejs/routes/appoitments');
const approval = require('./Nodejs/routes/approval');
const dashbord = require('./Nodejs/routes/dashbord');

//*app.use('/',addapointment);
app.use('/',pharmacys);
app.use('/',doctors);
app.use('/',clinics);
app.use('/',patients);
app.use('/',appointments);
app.use('/',approval);
app.use('/',dashbord);


app.listen(1337,'127.0.0.1', function() {

    console.log('listening at port 1337');

});