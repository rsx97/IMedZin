const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const serviceClinique = mysql.define('servicesclinique',{
    
    idservice : {
        type : sequelize.INTEGER,
        primaryKey: true,
        allowNull : false
    },

    idclinique : {
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
        type : sequelize.STRING
    }
},{
    tableName : 'servicesclinique',
    timestamps : false
});

module.exports = serviceClinique;