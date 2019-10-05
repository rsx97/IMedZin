const express = require('express');

const router = express.Router();

const Controller = require('../controlers/ContollerClinic');

router.get('/clinics',Controller.getClinics);

router.post('/add-clinic',Controller.addClinic);

router.get('/add-clinic',(req,res)=> {

    res.render('../ajouter-clinic');

});

router.get('/clinic-profile',Controller.getProfileClinic);

router.get('/edit-clinic',Controller.getEditClinic);

router.post('/edit-clinic',Controller.EditClinic);

router.get('/clinicservice-profile',Controller.getServiceProfile);

router.get('/clinic-services',Controller.getServicesClinic);

router.get('/clinic/checkmail/:mail',Controller.checkMailClinic);

router.get('/clinic/checkphone/:phone',Controller.checkPhoneClinic);

router.put('/clinic/changestatus/:id',Controller.ChangeClinicStatus);

router.delete('/clinic/delete/:id',Controller.DeleteClinic);

router.delete('/service-clinic/delete/:id',Controller.DeleteServiceClinic);


module.exports = router;