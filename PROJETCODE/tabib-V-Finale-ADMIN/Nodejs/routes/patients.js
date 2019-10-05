const router = require('express').Router();

const ControllerPatients = require('../controlers/ControllerPatients');

router.get('/patients',ControllerPatients.getPatient);

module.exports = router;