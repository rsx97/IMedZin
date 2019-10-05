const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const eservicepharmacy = mysql.define('eservicepharmacie',{

    id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },

    idservice : {
        type : sequelize.INTEGER,
        allowNull : false
    },

    jour : {
        type : sequelize.STRING,
        allowNull : false,
    },

    hdebut : {
        type : sequelize.TIME,
        allowNull : false
    },

    hfin : {
        type : sequelize.TIME,
        allowNull : false
    },

    maxpatient : {
        type : sequelize.INTEGER,
    }
},{
    tableName : 'eservicepharmacie',
    timestamps : false
}
   
);

module.exports = eservicepharmacy;