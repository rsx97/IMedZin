const sequelize = require("sequelize");

const mysql = require("../Nodejs/config/sequelize");


var clinic = mysql.define('clinique',{
       
        idclinique : {
           type : sequelize.INTEGER,
           allowNull : false,
           autoIncrement: true,
           primaryKey : true 
       },

       nom : {
           type : sequelize.STRING,
           allowNull:false
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
           defaultValue : true,
       },

       CV : {
           type : sequelize.STRING,
           allowNull : false
       },

       codepos : {
           type : sequelize.STRING,
           allowNull : false
           
       },

}, 
{
    tableName : "clinique",
    timestamps : false,


});


module.exports = clinic;

