const express = require('express');
const app = express();
const connect = require('mysql');
const mysql = connect.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'Imedezine' 
});

mysql.connect(function(err){
    if(err){
        console.log(err);
    }
    else {
        for(var i=0;i<55;i++){
            var nomclinique = 'pharmacie'+i;
            var prenomclinique = 'dwa' + i;
            var adrclinique = 'medea'+i;
            var numtel = '07709792' +i;
            var email = 'lol'+i+'@sba.dz';
            var pwd=i;
            var age = 16+i;
          mysql.query('insert into pharmacie(nom,prenom,adr,numtel,email,pwd,age,sex,datene,phprofile) values(?,?,?,?,?,?,?,"homme",27/09/1997,"makach")',[nomclinique,prenomclinique,adrclinique,numtel,email,pwd,age],function(err){
              if(err){
                  console.log(err);
              }
              else {
                  console.log('inserted');
              }
          });
        };
    };
});

app.listen(1337,function(){
    console.log("hello 1337");
})