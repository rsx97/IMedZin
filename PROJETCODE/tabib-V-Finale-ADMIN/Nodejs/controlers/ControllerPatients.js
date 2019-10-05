const patient = require('../../models/patient');

exports.getPatient = (req,res)=>{

   /**  var hint=1,hint1=0;
    if(req.query.status){
        hint=req.query.status;
        hint1=req.query.status;
    }
         */
    patient.findAll()
        .then(patient => {

            res.render("../patients",{patients:patient});
        })
        .catch(err=> {
            console.log(err);
        });

}