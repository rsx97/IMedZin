const express = require('express');
const router = express.Router();

const pharmacy = require('../../models/pharmacy');

const Controller = require('../controlers/ControllerPharmacy');


// show pharmacy 


router.get('/pharmacys',Controller.getpharmacys);



//show add-pharmacy 



router.get('/add-Pharmacy',(req,res)=>{


    res.render('../ajouter-pharmacy');


});

//add pharmacie
router.post('/add-pharmacy',Controller.addpharmacy);



//Edit pharmacy 



router.get('/edit-Pharmacy',Controller.geteditpharmacy);


router.post('/edit-pharmacy',Controller.editpharmacy);



//DELETE pharmacy 


router.delete('/pharmacy/delete/:id',Controller.Deletepharmacy);


//profile pharmacy 


router.get('/pharmacy-profile',Controller.getpharmacyprofile);

//Bloque pharmacy 

router.put('/pharmacy/changestatus/:id',Controller.ChangePharmacyStatus);

//Afficher les services de pharmacy 

router.get('/pharmacy-services',Controller.getServicesPharmacy);

//aficher profile service de pharmacy 

router.get('/pharmacyservice-profile',Controller.getServiceProfile);

router.get('/pharmacy/checkmail/:mail',Controller.checkMailPharmacy);

router.get('/pharmacy/checkphone/:phone',Controller.checkPhonePharmacy);

module.exports = router;