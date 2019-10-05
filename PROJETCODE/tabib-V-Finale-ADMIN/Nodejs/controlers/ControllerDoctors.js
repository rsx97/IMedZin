 const doctor = require('../../models/doctor');
  
 const Op = require('sequelize').Op;

 const epdoctor = require('../../models/epdoctor');

 exports.getDoctor = (req,res)=> {
    var hint=1,hint1=0;
    if(req.query.status){
        hint=req.query.status;
        hint1=req.query.status;
    };

    doctor.findAll({where : {
        active : {
            [Op.or] : [hint,hint1]
        }
    }})
    .then((doctors)=>{

        res.render('../doctors',{doctors:doctors,status:req.query.status});
    })
    .catch(err => {
        console.log(err);
    });

 };

 exports.getProfileDoctor = (req,res)=> {

    doctor.findOne({where : {
        idmedecin : req.query.id
    }})
    .then((doctor)=>{

        epdoctor.findAll({where : {
            idmedecin : doctor.idmedecin
        }}).then(epdoctor=>{

            res.render('../Profile-medecin',{doctor:doctor,epdoctor:epdoctor});

        }).catch(err=>{
            console.log(err);
        })
        

    })
    .catch(err=>{
        console.log(err);
    })
 }

 exports.addDoctor = (req,res)=>{

    let filename,CV;
    //upload file
      if(req.files.phprofile){

      let file=req.files.phprofile;

      filename="imgdoctor/" + Date.now() +req.body.email+file.name;
      
      file.mv('../ImedzineV3/IMG/'+filename,(err)=>{

        if (err) throw err;
                    
      })}
      
      else {

         filename = "avatar.jpeg";
      }

      if(req.files.CV){
          let file = req.files.CV;
           CV ="cvdoctor/"+Date.now() +req.body.email + file.name;
           file.mv('../ImedzineV3/IMG/'+CV,(err)=>{
               if(err) throw err;
           }) 
      }
      doctor.create({

        nom : req.body.nom,
        prenom : req.body.prenom,
        adr : req.body.adr,
        adr1 : req.body.adr1,
        numtel : req.body.numtel,
        email : req.body.email,
        phprofile : filename,
        pwd : req.body.password,
        age : req.body.age,
        sex : req.body.sex,
        datene : req.body.datene,
        CV : CV,
        codepos : req.body.codepos,
        specialite : req.body.specialite,
        prix : req.body.prix,
        education : req.body.education || "",
        experience : req.body.experience || ""
    })
    .then(()=> {

        res.redirect('../doctors');
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

exports.geteditDoctor = (req,res)=> {

    doctor.findOne({where : {
        idmedecin : req.query.id }
    })

    .then((doctor)=>{
        console.log(doctor.email)
        res.render('../modifier-doctor',{doctor : doctor});
    })
    .catch(err => {
        console.log(err);
    })
};

exports.editDcotor = (req,res) => {
    console.log(req.body.sex)
    var filename,CV;
    //upload file
    if(req.files){
    if(req.files.phprofile){
        var file=req.files.phprofile;
  
        filename="imgdoctor/"+Date.now() + req.body.email +file.name;
  
        file.mv('../ImedzineV3/IMG/'+filename,(err)=>{
  
                if(err) console.log("a"+err);
                      
        });
    }
      else {
          
        filename = req.body.image;

      };

      if(req.files.CV){

        let file = req.files.CV;
        CV ="cvdoctor/" + Date.now() + req.body.email + file.name;
        file.mv("../ImedezineV3/IMG/"+filename,(err)=>{
            if (err) console.log(err);
        });
      } else {

        CV = req.body.cvfile;
      };
    };

      doctor.update({
        
        nom : req.body.nom,
        prenom : req.body.prenom,
        adr : req.body.adr,
        adr1 : req.body.adr1,
        numtel : req.body.numtel,
        email : req.body.email,
        phprofile : filename,
        pwd : req.body.password,
        age : req.body.age,
        sex : req.body.sex,
        datene : req.body.datene,
        CV : CV,
        codepos : req.body.codepos,
        specialite : req.body.specialite,
        prix : req.body.prix,
        education : req.body.education || "",
        experience : req.body.experience || ""

      },{
          where : {
              idmedecin : req.query.id
          }
      }).then(()=>{
          res.redirect('../doctor-profile?id='+req.query.id);
      }).catch(err=>{
          res.send(err);
      })
}

exports.checkMailDoctor = (req,res)=>{
    doctor.count({where : {
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

exports.checkPhoneDoctor = (req,res)=>{

    doctor.count({where : {
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

exports.ChangeDoctorStatus = (req,res)=> {
    doctor.update({
        active : req.query.value
    }, {where : {
        idmedecin : req.params.id
    }})
    .then((result)=>{
        res.send();
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.DeleteDoctor = (req,res)=>{

  doctor.destroy({where : {
      idmedecin : req.params.id
  }})
  .then(()=>{
      res.send();
  })
  .catch(err=>{
      console.log(err);
  })
}

    
 
