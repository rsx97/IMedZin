const clinic = require('../../models/clinic');

const service = require('../../models/serviceclinique');

const Op = require('sequelize').Op;

const epclinic = require('../../models/epclinic');

const servicesclinic = require('../../models/serviceclinique');

const eserviceclinic = require('../../models/eservicesclinic');

const sequelize = require('../config/sequelize');

exports.getClinics = (req,res) => {

    var hint=1,hint1=0;
    if(req.query.status){
        hint=req.query.status;
        hint1=req.query.status;
    }

    clinic.findAll({where : {
        active : {
            [Op.or] : [hint,hint1]
        }
    }})
        .then(clinic => {
            res.render("../clinics",{clinic:clinic,status:req.query.status});
        })
        .catch(err=> {
            console.log(err);
        });

}

exports.addClinic = (req,res)=> {

    let filename,CV;
    //upload file
      if(req.files.phprofile){

      let file=req.files.phprofile;

      filename='imgclinique/'+Date.now() +req.body.email+file.name;
      
      file.mv('../ImedzineV3/IMG/'+filename,(err)=>{

        if (err) throw err;
                    
      })}
      
      else {

         filename = "avatar.jpeg";
      }

      if(req.files.CV){
          let file = req.files.CV;
           CV ="cvclinic/"+Date.now() +req.body.email + file.name;
           file.mv('../ImedzineV3/IMG/'+CV,(err)=>{
               if(err) throw err;
           }) 
      }
      clinic.create({

        nom : req.body.nom,
        adr : req.body.adr,
        adr1 : req.body.adr1,
        numtel : req.body.numtel,
        email : req.body.email,
        phprofile : filename,
        pwd : req.body.password,
        CV : CV,
        codepos : req.body.codepos,
    
    })
    .then(()=> {

        res.redirect('../clinics');
    })
    .catch(err => {
        
        console.log(err);
    });
};

exports.getProfileClinic = (req,res)=> {
     var services;
    clinic.findOne({
        where : { 
            idclinique : req.query.id 
        }
    })
    .then(clinic=>{

        service.findAll({where : {
            idclinique : clinic.idclinique
        }}).then(service => {
            
            epclinic.findAll({where : {
                idclinique : clinic.idclinique
            }}).then(epclinic=>{

                res.render('../Profile-clinic',{clinic:clinic,services:service,epclinic:epclinic});
            }).catch(err => {
                console.log(err);
            })
        }).catch(err=>{
            console.log(err);
        });
    })
    .catch(err=> {
        res.send(err);
    })
}

exports.getEditClinic = (req,res)=> {

    clinic.findOne({where : {
        idclinique : req.query.id }
    })

    .then((clinic)=>{
        res.render('../modifier-clinic',{clinic : clinic});
    })
    .catch(err => {
        console.log(err);
    })

}

exports.EditClinic = (req,res)=>{
    var filename,CV;
    //upload file
    if(req.files){
    if(req.files.phprofile){
        
        var file=req.files.phprofile;
  
        filename="imgclinique/"+Date.now() + req.body.email +file.name;
  
        file.mv('../ImedzineV3/IMG/'+filename,(err)=>{
  
                if(err) console.log("a"+err);
                      
        });
    }
      else {
          
        filename = req.body.image;

      };

      if(req.files.CV){

        let file = req.files.CV;
        CV = "cvclinic/" +Date.now() + req.body.email + file.name;
        file.mv("../ImedezineV3/IMG/"+filename,(err)=>{
            if (err) console.log(err);
        });
      } else {

        CV = req.body.cvfile;
      };
    };

      clinic.update({
        nom : req.body.nom,
        adr : req.body.adr,
        adr1 : req.body.adr1,
        numtel : req.body.numtel,
        email : req.body.email,
        phprofile : filename,
        pwd : req.body.password,
        CV : CV,
        codepos : req.body.codepos,
      },{
          where : {
              idclinique : req.query.id
          }
      }).then(()=>{
          res.redirect('../clinic-profile?id='+req.query.id);
      }).catch(err=>{
          res.send(err);
      })
}

exports.getServiceProfile = (req,res)=>{

    servicesclinic.findOne({where : {
        idservice : req.query.id

    }}).then(service=>{
        clinic.findOne({where : {
            idclinique : service.idclinique

        }}).then(clinic=>{
            
            eserviceclinic.findAll({where : {
            idservice : service.idservice 

            }
        }).then(eservice=> {

            res.render('../Profile-serviceclinic',{clinic:clinic,service:service,eservice:eservice});

        })

        }).catch(err=>{
            console.log(err);

        }).catch(err=>{
            console.log(err);
        })
    })

}


exports.getServicesClinic = (req,res)=>{

        sequelize.query("select c.nom as nomclinic,c.email as emailclinic,c.idclinique as idclinic,c.numtel,s.phprofile as phprofileservice,s.idservice as idservice,s.nom as nomservice,s.prix as prixservice from servicesclinique as s,clinique as c where (s.idclinique=c.idclinique);",
         {type : sequelize.QueryTypes.SELECT})

        .then(service=>{
            res.render('../servicesclinic',{services:service});
        })
        .catch(err=>{
            console.log(err);
        })
}

exports.checkMailClinic = (req,res)=>{
    clinic.count({where : {
        email : req.params.mail
    }})

    .then(result=>{
        console.log(result);
        if(result ==0){
            res.send('noexist');
        }
        else {
            res.send('exist');
        }
    })
    
    .catch(err=>{
        console.log(err);
    })
}

exports.checkPhoneClinic = (req,res)=>{

    clinic.count({where : {
        numtel : req.params.phone
    }})

    .then(result=>{
        console.log(result);
        if(result ==0){
            res.send('noexist');
        }
        else {
            res.send('exist');
        }
    })
    
    .catch(err=>{
        console.log(err);
    })
}

exports.ChangeClinicStatus = (req,res)=> {
    clinic.update({
        active : req.query.value
    }, {where : {
        idclinique : req.params.id
    }})
    .then((result)=>{
        res.send();
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.DeleteClinic = (req,res)=>{

  clinic.destroy({where : {
      idclinique : req.params.id
  }})
  .then(()=>{
      res.send();
  })
  .catch(err=>{
      console.log(err);
  })
}

exports.DeleteServiceClinic = (req,res)=>{

    servicesclinic.destroy({ where : {
        idservice : req.params.id
    }})
    .then(()=>{
        res.send();
    })
    .catch(err=>{
        console.log(err);
    })
}

