const pharmacy = require('../../models/pharmacy');

const servicepharmacy = require('../../models/servicepharmacie');

const eppharmacie = require('../../models/epharmacy');

const Op = require('sequelize').Op;

const sequelize = require('../config/sequelize');

const eservicepharmacy = require('../../models/eservicespharmacy');


exports.getpharmacys = (req,res)=> {
    var hint=1,hint1=0;
    if(req.query.status){
        hint=req.query.status;
        hint1=req.query.status;
    }
    
    pharmacy.findAll({where : {
        active : {
            [Op.or] : [hint,hint1]
        }
    }})
        .then(pharmacie => {

            res.render("../pharmacys",{pharmacie:pharmacie,status:req.query.status});
        })
        .catch(err=> {
            console.log(err);
        });
};

exports.addpharmacy = (req,res)=> {

    let filename,CV;
    //upload file
      if(req.files.phprofile){

      let file=req.files.phprofile;

      filename="imgpharmacy/"+Date.now() +req.body.email+file.name;
      
      file.mv('../ImedzineV3/IMG/'+filename,(err)=>{

        if (err) throw err;
                    
      })}
      
      else {

         filename = "avatar.jpeg";
      }

      if(req.files.CV){
          let file = req.files.CV;
           CV ="cvpharmacy/"+Date.now() +req.body.email + file.name;
           file.mv('../ImedzineV3/IMG/'+CV,(err)=>{
               if(err) throw err;
           }) 
      }
      pharmacy.create({

        nom : req.body.nom,
        prenom : req.body.prenom,
        adr : req.body.adr,
        adr1 : req.body.adr1,
        numtel : req.body.numtel,
        email : req.body.email,
        phprofile : filename,
        pwd : req.body.password,
        CV : CV,
        codepos : req.body.codepos,
        education : req.body.education || "",
        experience : req.body.experience || ""
    })
    .then(()=> {

        res.redirect('../pharmacys');
    })
    .catch(err => {
        
        console.log(err);
    });
};

exports.deletepharmacy = (req,res)=>{

    pharmacy.destroy({where : {
        idpharmacie : req.query.id
    }
    })
    .then(()=>{
        res.redirect('../pharmacys');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.updatestatuspharmacy = (req,res)=> {

    pharmacy.update({active : req.query.state},{where : {
        idpharmacie : req.query.id
    }})
    .then(()=>{
        res.redirect('../pharmacys');
    })
    .catch(err => {
        console.log(err);
    });

};

exports.getpharmacyprofile = (req,res)=> {

    pharmacy.findOne({where : {
        idpharmacie : req.query.id
    }})

    .then((pharmacie)=>{

        servicepharmacy.findAll({where : {
            idpharmacie : pharmacie.idpharmacie
        }}).then(services=>{

         eppharmacie.findAll({where : {
             idpharmacie : pharmacie.idpharmacie
         } }).then(eppharmacy=>{

            
            res.render('../Profile-pharmacy',{pharmacie:pharmacie,services:services,eppharmacy:eppharmacy});


         }).catch(err=>{
             console.log(err);
         })
        }).catch(err=>{
            console.log(err);
        })

    })
    .catch(err=>{
        console.log(err);
    })
};

exports.geteditpharmacy = (req,res)=> {

    pharmacy.findOne({where : {
        idpharmacie : req.query.id }
    })

    .then((pharmacy)=>{
        res.render('../modifier-pharmacy',{pharmacy : pharmacy});
    })
    .catch(err => {
        console.log(err);
    })
};

exports.editpharmacy = (req,res) => {

    var filename,CV;
    //upload file
    if(req.files){
    if(req.files.phprofile){
        
        var file=req.files.phprofile;
  
        filename="imgpharmacy/"+Date.now() + req.body.email +file.name;
  
        file.mv('../ImedzineV3/IMG/'+filename,(err)=>{
  
                if(err) console.log("a"+err);
                      
        });
    }
      else {
          
        filename = req.body.image;

      };

      if(req.files.CV){

        let file = req.files.CV;
        CV ="cvpharmacy/" + Date.now() + req.body.email + file.name;
        file.mv("../ImedezineV3/IMG/"+filename,(err)=>{
            if (err) console.log(err);
        });
      } else {

        CV = req.body.cvfile;
      };
    };

      pharmacy.update({
        nom : req.body.nom,
        prenom : req.body.prenom,
        adr : req.body.adr,
        adr1 : req.body.adr1,
        numtel : req.body.numtel,
        email : req.body.email,
        phprofile : filename,
        pwd : req.body.password,
        CV : CV,
        codepos : req.body.codepos,
        education : req.body.education || "",
        experience : req.body.experience || ""
      },{
          where : {
              idpharmacie : req.query.id
          }
      }).then(()=>{
          res.redirect('../pharmacy-profile?id='+req.query.id);
      }).catch(err=>{
          res.send(err);
      })
}

exports.getServicesPharmacy = (req,res)=> {

    sequelize.query("select c.nom as nompharmacy,c.email as emailpharmacy,c.idpharmacie as idpharmacy,c.numtel,s.phprofile as phprofileservice,s.idservice as idservice,s.nom as nomservice,s.prix as prixservice from servicespharmacie as s,pharmacie as c where (s.idpharmacie=c.idpharmacie);",
    {type : sequelize.QueryTypes.SELECT})

   .then(service=>{
       console.log(service[0]);
       res.render('../servicespharmacy',{services:service});
   })
   .catch(err=>{
       console.log(err);
   })
}


exports.getServiceProfile = (req,res)=>{

    servicepharmacy.findOne({where : {
        idservice : req.query.id

    }}).then(service=>{
        pharmacy.findOne({where : {
            idpharmacie : service.idpharmacie

        }}).then(pharmacy=>{
            
            eservicepharmacy.findAll({where : {
            idservice : service.idservice 

            }
        }).then(eservice=> {

            res.render('../Profile-servicepharmacy',{pharmacy:pharmacy,service:service,eservice:eservice});

        })

        }).catch(err=>{
            console.log(err);

        }).catch(err=>{
            console.log(err);
        })
    })

}

exports.checkMailPharmacy = (req,res)=>{
    pharmacy.count({where : {
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

exports.checkPhonePharmacy = (req,res)=>{

    pharmacy.count({where : {
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

exports.ChangePharmacyStatus = (req,res)=> {
    pharmacy.update({
        active : req.query.value
    }, {where : {
        idpharmacie : req.params.id
    }})
    .then((result)=>{
        res.send();
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.Deletepharmacy = (req,res)=>{

  pharmacy.destroy({where : {
      idpharmacie : req.params.id
  }})
  .then(()=>{
      res.send();
  })
  .catch(err=>{
      console.log(err);
  })
}

