const doctor = require('../../models/doctor');

const pharmacy = require('../../models/pharmacy');

const clinic = require('../../models/pharmacy');

const patient = require('../../models/patient');

const sequelize = require('../config/sequelize');

exports.Dashbor = (req,res)=>{

    doctor.count()
    .then((countdoctors)=>{

        patient.count()
        .then(countpatient=>{
            clinic.count()
            .then(countclinic=>{
                pharmacy.count()
                .then(countpharmacy=>{
                    res.render('../index',{doctors:countdoctors,patients:countpatient,clinics:countclinic,pharmacys:countpharmacy});
                })
                .catch(err=>{
                    console.log(err);
                })
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.chart = (req,res)=>{

 sequelize.query('select MONTH(datecre) as month,count(idpatient) as number from patient where datecre > :date group by MONTH(datecre)',
 {replacements : {date : req.params.year} , type : sequelize.QueryTypes.SELECT})
 .then(rows=>{
     console.log(rows[0].month);
 })
 .catch(err=>{
     console.log(err);
 })
}