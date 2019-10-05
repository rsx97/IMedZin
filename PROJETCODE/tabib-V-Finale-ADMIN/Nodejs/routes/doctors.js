const express = require('express');

const router = express.Router();

const sequelize = require('../config/sequelize');

const doctor = require('../../models/doctor');

const Controller = require('../controlers/ControllerDoctors');


// afichier les medecin 

router.get('/doctors',Controller.getDoctor);




router.get('/add-doctor',(req,res)=>{


    res.render('../ajouter-doctor');


});

//add pharmacie
router.post('/add-doctor',Controller.addDoctor);


router.get("/doctor-profile",Controller.getProfileDoctor);

router.get("/edit-Doctor",Controller.geteditDoctor);

router.post("/edit-doctor",Controller.editDcotor);

router.get("/doctor/checkmail/:mail",Controller.checkMailDoctor);

router.get("/doctor/checkphone/:phone",Controller.checkPhoneDoctor);

router.put("/doctor/changestatus/:id",Controller.ChangeDoctorStatus);

router.delete("/doctor/delete/:id",Controller.DeleteDoctor);







   module.exports = router;