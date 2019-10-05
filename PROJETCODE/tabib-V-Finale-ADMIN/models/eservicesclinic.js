const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const eserviceclinic = mysql.define('eserviceclinique',{

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
    tableName : 'eserviceclinique',
    timestamps : false
}
   
);

module.exports = eserviceclinic;