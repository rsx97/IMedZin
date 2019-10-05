const sequelize = require('../config/sequelize');

const appointmentsdoctor = require('../../models/rndvmedecin');

const appointmentsclinic = require('../../models/rndvclinic');

exports.getAppoitmentDoctor = (req,res)=>{

     sequelize.query("select r.id as id,r.jour as jour,d.idmedecin as idmedecin ,d.nom as nomdoctor,d.prenom as prenomdoctor,d.specialite as specialitedoctor,p.prenom as prenompatient,p.age as agepatient,p.phprofile as phprofilepatient ,p.nom as nompatient from rndvmedecin as r,patient as p ,medecin as d where (d.idmedecin=r.idmedecin and p.idpatient=r.idpatient);",
     {type : sequelize.QueryTypes.SELECT})
     .then(result=>{
         res.render('../appointmentsdoctors',{infos:result});
     }).catch(err=>{
         console.log(err);
     })
}

exports.getAppoitmentClinic = (req,res)=> {
     
    sequelize.query("select r.id as id,r.jour as jour,s.nom as nomservice,s.prix as prixservice,c.idclinique as idclinic,c.nom as nomclinique,p.nom as nompatient,p.age as agepatient,p.phprofile as phprofilepatient from clinique as c,patient as p,servicesclinique as s,rndvclinique as r where (r.idservice=s.idservice and r.idpatient=p.idpatient and c.idclinique=s.idclinique);",
     { type : sequelize.QueryTypes.SELECT})
     .then(result=>{
         res.render('../appointmentsclinics',{infos:result});
     }).catch(err=>{
         console.log(err);
     })

}

exports.deleteAppointmentsDoctor = (req,res)=>{
    appointmentsdoctor.destroy({ where : {
        id : req.params.id
    }})
    .then(rows=>{
        res.send({result : 'success'});
    })
    .catch(err=>{
        res.send({err : 'err'});
    })
}

exports.deleteAppointmentsClinic = (req,res)=>{

    appointmentsclinic.destroy({where : {
        id : req.params.id
    }}
    )
    .then(()=>{
        
        res.send({ result : 'success' });
    })
    .catch(err=>{
        res.send({err : 'err' });
    })
}