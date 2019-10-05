const router = require('express').Router();

const ControllerAppoitments = require('../controlers/ControllerAppoitments');


router.get('/doctors-appointments',ControllerAppoitments.getAppoitmentDoctor);

router.get('/clinics-appointments',ControllerAppoitments.getAppoitmentClinic);

router.delete('/doctors-appointments/delete/:id',ControllerAppoitments.deleteAppointmentsDoctor);

router.delete('/clinics-appointments/delete/:id',ControllerAppoitments.deleteAppointmentsClinic);



module.exports = router;