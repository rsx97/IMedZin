const router = require('express').Router();

const ControllerApproval = require('../controlers/ControllerApproval');

//aficher approval 

router.get('/approval',ControllerApproval.getApproval);

router.put('/approval/deblock/:id',ControllerApproval.deblockClinic);

router.put('/approval/block/:id',ControllerApproval.blockClinic);

router.delete('/approval/delete/:id',ControllerApproval.delete);



module.exports = router;