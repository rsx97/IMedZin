const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const servicePharmacie = mysql.define('servicespharmacie',{
    
    idservice : {
        type : sequelize.INTEGER,
        primaryKey: true,
        allowNull : false
    },

    idpharmacie : {
        type : sequelize.INTEGER,
        allowNull : false,
    },

    nom : {
        type : sequelize.INTEGER,
        allowNull : false
    },

    datecre : {
        type : sequelize.DATE
    },

    prix : {
        type : sequelize.INTEGER
    },

    phprofile : {
        type:sequelize.STRING
    }
},{
    tableName : 'servicespharmacie',
    timestamps : false
});

module.exports = servicePharmacie;