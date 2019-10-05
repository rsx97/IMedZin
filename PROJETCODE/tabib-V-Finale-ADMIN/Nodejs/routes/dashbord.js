const router = require('express').Router();

const ControllerDashbor = require('../controlers/ControllerDashbord');


router.get("/index",ControllerDashbor.Dashbor);


router.get('/getchart/patientpharmacy/:year',ControllerDashbor.chart);



module.exports = router;