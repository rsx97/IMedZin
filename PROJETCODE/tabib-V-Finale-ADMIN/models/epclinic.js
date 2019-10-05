const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const epclinic = mysql.define('employeclinique',{

    id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },

    idclinique : {
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
    tableName : 'employeclinique',
    timestamps : false
}
   
);

module.exports = epclinic;