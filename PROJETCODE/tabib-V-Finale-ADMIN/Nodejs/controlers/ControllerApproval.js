const doctor = require('../../models/doctor');

const patient = require('../../models/patient');

const pharmacy = require('../../models/pharmacy');

const clinic = require('../../models/clinic');

exports.getApproval = (req,res)=>{

    if(req.query.person=="doctor" || !req.query.person){

        doctor.findAll({where : {
            active : 0
        }})

        .then(doctor=>{

            res.render('../approval',{persons:doctor,person:req.query.person,type:'Doctor'});
        })

        .catch(err=>{

            console.log(err);

        })
    }
    else if (req.query.person=="patient"){

        patient.findAll({where : {
            active : 0
        }})

        .then(patient=>{

            res.render('../approval',{persons:patient,person:req.query.person,type:'Patient'});
        })

        .catch(err=>{

            console.log(err);

        })

    }

    else if (req.query.person=="clinic"){

        clinic.findAll({where : {
            active : 0
        }})

        .then(clinic=>{

            res.render('../approval',{persons:clinic,person:req.query.person,type:'Clinic'});
        })

        .catch(err=>{

            console.log(err);

        })

    }

    else if (req.query.person=="pharmacy"){

        pharmacy.findAll({where : {
            active : 0
        }})

        .then(pharmacy=>{

            res.render('../approval',{persons:pharmacy,person:req.query.person,type:'Pharmacy'});
        })

        .catch(err=>{

            console.log(err);

        })
    }
}

exports.deblockClinic = (req,res)=>{

    if(req.query.person == "clinic"){
    clinic.update({active : 1},{
        where : {
            idclinique : req.params.id
        }
    })
    .then(row=>{
        res.send({result:'success'});
    })
    .catch(err=>{
        console.log(err);
    })
}

else if(req.query.person == "patient"){

    patient.update({active : 1}, {
        where : {
            idpatient : req.params.id
        }
    })

    .then(row=>{
        res.send({result:'success'});
    })
    .catch(err=>{
        console.log(err);
    })
}
else if(req.query.person == "pharmacy"){
    
    pharmacy.update({ active : 1}, {
        where : {
            idpharmacie : req.params.id
        }
    })
    .then(row=>{
        res.send({result:'success'});
    })
    .catch(err=>{
        console.log(err);
    })
}

else if(req.query.person == "doctor" || !req.query.person){
    doctor.update({active : 1 },{
        where : {
            idmedecin : req.params.id
        }
    })
    .then(row=>{
        res.send({result:'success'});
    })
    .catch(err=>{
        console.log(err);
    })
}

}


exports.blockClinic = (req,res)=> {
    
    if(req.query.person == "clinic"){
        clinic.update({active : 0},{
            where : {
                idclinique : req.params.id
            }
        })
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    else if(req.query.person == "patient"){
    
        patient.update({active : 0}, {
            where : {
                idpatient : req.params.id
            }
        })
    
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    else if(req.query.person == "pharmacy"){
        
        pharmacy.update({ active : 0}, {
            where : {
                idpharmacie : req.params.id
            }
        })
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    else if(req.query.person == "doctor" || !req.query.person){
    
        doctor.update({active : 0 },{
            where : {
                idmedecin : req.params.id
            }
        })
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    
}


exports.delete = (req,res)=>{

    if(req.query.person == "clinic"){
        clinic.destroy({
            where : {
                idclinique : req.params.id
            }
        })
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    else if(req.query.person == "patient"){
    
        patient.destroy({
            where : {
                idpatient : req.params.id
            }
        })
    
        .then(row=>{
            console.log("hh");
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    else if(req.query.person == "pharmacy"){
        
        pharmacy.destroy({ 
            where : {
                idpharmacie : req.params.id
            }
        })
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    else if(req.query.person == "doctor" || !req.query.person){
    
        doctor.destroy({
            where : {
                idmedecin : req.params.id
            }
        })
        .then(row=>{
            res.send({result:'success'});
        })
        .catch(err=>{
            console.log(err);
        })
    }
}