const sequelize = require('sequelize');

const mysql = require('../Nodejs/config/sequelize');

const eppharmacy = mysql.define('employepharmacie',{

    id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },

    idpharmacie : {
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
    tableName : 'employepharmacie',
    timestamps : false
}
   
);

module.exports = eppharmacy;