const sequelize = require("sequelize");

const mysql= require("../Nodejs/config/sequelize");

var doctor = mysql.define('medecin',{
       
        idmedecin : {
           type : sequelize.INTEGER,
           allowNull : false,
           autoIncrement: true,
           primaryKey : true 
       },

       nom : {
           type : sequelize.STRING,
           allowNull:false
       },

       prenom : {
           type : sequelize.STRING,
           allowNull : false
       },

       adr : {
           type : sequelize.STRING,
           allowNull : false
       },

       adr1 : {
           type : sequelize.STRING,
           allowNull : false
       },

       numtel : {
           type : sequelize.STRING,
           allowNull : false
       },

       email : {
           type : sequelize.STRING,
           allowNull : false
       },

       pwd : {
           type : sequelize.STRING,
           allowNull : false
       },

       age : {
           type : sequelize.INTEGER,
       },

       sex : {
           type : sequelize.INTEGER,
           allowNull : false
       },

       datene : {
        type : sequelize.STRING,
        allowNull : false,
       },

       datecre : {
           type : sequelize.STRING
       },

       phprofile : {
           type : sequelize.STRING,
           allowNull : false
       },

       note : {
           type : sequelize.INTEGER,
           
       },

       active : {
           type : sequelize.BOOLEAN,
           defaultValue : false,
       },

       CV : {
           type : sequelize.STRING,
           allowNull : false
       },

       codepos : {
           type : sequelize.STRING
           
       },

       specialite : {
           type : sequelize.STRING,
           allowNull : false
       },

       prix : {
           type : sequelize.INTEGER
       },

       education : {
           type : sequelize.STRING
       },
       
       experience : {
           type : sequelize.STRING
       }

}, 
{
    tableName : "medecin",
    timestamps : false,


});

module.exports = doctor;

