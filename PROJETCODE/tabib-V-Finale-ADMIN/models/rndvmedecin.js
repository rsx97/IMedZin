const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const aptmndoctor = mysql.define('rndvmedecin',{
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

    idpatient : {
        type : sequelize.INTEGER,
        allowNull : false,
    },

    jour : {
        type : sequelize.STRING,
        allowNull : false
    }
},{
    tableName : 'rndvmedecin',
    timestamps : false
});

module.exports = aptmndoctor;