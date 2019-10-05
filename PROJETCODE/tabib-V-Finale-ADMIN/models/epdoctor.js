const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const epdoctor = mysql.define('employemedecin',{

    id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },

    idmedecin : {
        type : sequelize.INTEGER,
        allowNull : false
    },

    jour : {
        type : sequelize.STRING,
        allowNull : false,
    },

    hdebut : {
        type : sequelize.STRING,
        allowNull : false
    },

    hfin : {
        type : sequelize.STRING,
        allowNull : false
    },

    maxpatient : {
        type : sequelize.STRING,
    }
},{
    tableName : 'employemedecin',
    timestamps : false
}
   
);

module.exports = epdoctor;