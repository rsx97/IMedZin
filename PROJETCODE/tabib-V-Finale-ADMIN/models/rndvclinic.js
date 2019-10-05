const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const aptmnclinic = mysql.define('rndvclinique',{
    id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },

    idpatient : {
        type : sequelize.INTEGER,
        allowNull : false
    },

    idservice : {
        type : sequelize.INTEGER,
        allowNull : false,
    },

    jour : {
        type : sequelize.STRING,
        allowNull : false
    }
},{
    tableName : 'rndvclinique',
    timestamps : false
});

module.exports = aptmnclinic;