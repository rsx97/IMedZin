/* creation DATABASE Imedezine 


-------------------------------------------------------------------------              */ 

CREATE DATABASE Imedezine;
use  Imedezine;


/* Creation des TABLEs 

creation la TABLE de patient 


-------------------------------------------------------------------------              */ 

CREATE TABLE patient (
    
    idpatient int NOT NULL AUTO_INCREMENT,
    nom varchar(20) NOT NULL,
    prenom varchar(20) NOT NULL,
    adr varchar(100) NOT NULL,
    numtel varchar(12) NOT NULL,
    email varchar(50) NOT NULL,
    pwd varchar(255) NOT NULL,
    age int NOT NULL,
    sex varchar(10) NOT NULL,
    datene varchar(60) NOT NULL,
    datecre timestamp DEFAULT CURRENT_TIMESTAMP,
    phprofile varchar(255),
    active boolean NOT NULL DEFAULT 0,
    PRIMARY KEY (idpatient),
    CHECK (age<=120 and age>=16)
);



/* creation la TABLE de medecin 


-------------------------------------------------------------------------              */ 

CREATE TABLE medecin (

    idmedecin int NOT NULL AUTO_INCREMENT,
    nom varchar(20) NOT NULL,
    prenom varchar(20) NOT NULL,
    adr varchar(100) NOT NULL,
    Wilaya varchar(24) NOT NULL,
    numtel varchar(12) NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    pwd varchar(255) NOT NULL,
    age int,
    sex varchar(10) NOT NULL,
    datene varchar(60) NOT NULL,
    datecre timestamp DEFAULT CURRENT_TIMESTAMP,
    phprofile varchar(255),
    note int DEFAULT NULL,
    active boolean NOT NULL DEFAULT 0,
    CV varchar(255) NOT NULL,
    codepos varchar(255),
    specialite varchar(255) NOT NULL,
    prix int,
    education varchar(255),
    experience varchar(255),
    PRIMARY KEY (idmedecin),
    CHECK (age<=120 and age>=16)
);


/* creation la TABLE de clinique 


-------------------------------------------------------------------------              */




CREATE TABLE clinique (

    idclinique int NOT NULL AUTO_INCREMENT,
    nom varchar(20) NOT NULL,
    adr varchar(100) NOT NULL,
    Wilaya varchar(24) NOT NULL,
    numtel varchar(12) NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    pwd varchar(255) NOT NULL,
    datecre timestamp DEFAULT CURRENT_TIMESTAMP,
    phprofile varchar(255),
    note int DEFAULT NULL,
    active boolean DEFAULT 0,
    CV varchar(255) NOT NULL,
    codepos varchar(255),
    PRIMARY KEY (idclinique)
);



/* creation la TABLE de pharmacie


-------------------------------------------------------------------------              */ 


CREATE TABLE pharmacie (

    idpharmacie int NOT NULL AUTO_INCREMENT,
    nom varchar(20) NOT NULL,
    prenom varchar(20) NOT NULL,
    adr varchar(100) NOT NULL,
    Wilaya varchar(20) NOT NULL,
    numtel varchar(12) NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    pwd varchar(255) NOT NULL,
    datecre timestamp DEFAULT CURRENT_TIMESTAMP,
    phprofile varchar(255) NOT NULL,
    note int DEFAULT NULL,
    active boolean DEFAULT 0,
    CV varchar(255) NOT NULL,
    codepos varchar(255),
    education varchar(255),
    experience varchar(255),
    PRIMARY KEY (idpharmacie)

);


/* creation la TABLE de servicesclinique


-------------------------------------------------------------------------              */ 


CREATE TABLE servicesclinique (

    idservice int NOT NULL AUTO_INCREMENT,
    idclinique int NOT NULL,
    nom varchar(255) NOT NULL,
    datecre timestamp DEFAULT CURRENT_TIMESTAMP,
    prix int NOT NULL,
    CHECK (prix>0),
    PRIMARY KEY(idservice),
    CONSTRAINT sv_idclinique FOREIGN KEY(idclinique) REFERENCES clinique(idclinique) ON DELETE CASCADE ON UPDATE CASCADE
);


/* creation la TABLE de eservicesclinique


-------------------------------------------------------------------------              */ 


CREATE TABLE eserviceclinique(

    id int NOT NULL AUTO_INCREMENT,
    idservice int NOT NULL,
    jour set("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche") NOT NULL,
    hdebut time NOT NULL,
    hfin time NOT NULL,
    maxpatient int,
    CHECK (hfin>hdebut and maxpatient>0),
    PRIMARY KEY(id),
    CONSTRAINT epscl_ideservice FOREIGN KEY(idservice) REFERENCES servicesclinique(idservice) ON DELETE CASCADE ON UPDATE CASCADE
);


/* creation la TABLE de servicespharmacie


-------------------------------------------------------------------------              */ 


CREATE TABLE servicespharmacie (

    idservice int NOT NULL AUTO_INCREMENT,
    idpharmacie int NOT NULL,
    nom varchar(255) NOT NULL,
    datecre timestamp DEFAULT CURRENT_TIMESTAMP,
    prix int NOT NULL,
    CHECK (prix>0),
    PRIMARY KEY(idservice),
    CONSTRAINT sv_idpharmacie FOREIGN KEY(idpharmacie) REFERENCES pharmacie(idpharmacie) ON DELETE CASCADE ON UPDATE CASCADE
);

/* creation la TABLE de servicespharmacie


-------------------------------------------------------------------------              */




CREATE TABLE eservicepharmacie(

    id int NOT NULL AUTO_INCREMENT,
    idservice int NOT NULL,
    jour set("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche") NOT NULL,
    hdebut time NOT NULL,
    hfin time NOT NULL,
    maxpatient int,
    CHECK (hfin>hdebut and maxpatient>0),
    PRIMARY KEY(id),
    CONSTRAINT epsph_idepharmacie FOREIGN KEY(idservice) REFERENCES servicespharmacie(idservice) ON DELETE CASCADE ON UPDATE CASCADE
);
      


/* creation la TABLE de Employemedecin


-------------------------------------------------------------------------              */ 




CREATE TABLE employemedecin (

    id int NOT NULL AUTO_INCREMENT,
    idmedecin int NOT NULL,
    jour set("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche") NOT NULL,
    hdebut time NOT NULL,
    hfin time NOT NULL,
    maxpatient int NOT NULL,
    CHECK (hfin>hdebut and maxpatient>0),
    PRIMARY KEY(id),
    CONSTRAINT ep_idmedecin FOREIGN KEY(idmedecin) REFERENCES medecin(idmedecin) ON DELETE CASCADE ON UPDATE CASCADE
);


/* creation la TABLE de Employeclinique


-------------------------------------------------------------------------              */ 

CREATE TABLE employeclinique (

    id int NOT NULL AUTO_INCREMENT,
    idclinique int NOT NULL,
    jour set("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche") NOT NULL,
    hdebut time NOT NULL,
    hfin time NOT NULL,
    maxpatient int NOT NULL,
    CHECK (hfin>hdebut and maxpatient>0),
    PRIMARY KEY(id),
    CONSTRAINT ep_idclinique FOREIGN KEY(idclinique) REFERENCES clinique(idclinique) ON DELETE CASCADE ON UPDATE CASCADE
);


/* creation la TABLE de Employepharmacie


-------------------------------------------------------------------------              */ 

CREATE TABLE employepharmacie (

    id int NOT NULL AUTO_INCREMENT,
    idpharmacie int NOT NULL,
    jour set("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche") NOT NULL,
    hdebut time NOT NULL,
    hfin time NOT NULL,
    maxpatient int NOT NULL,
    CHECK (hfin>hdebut and maxpatient>0),
    PRIMARY KEY(id),
    CONSTRAINT ep_idpharmacie FOREIGN KEY(idpharmacie) REFERENCES pharmacie(idpharmacie) ON DELETE CASCADE ON UPDATE CASCADE
);


/* creation la TABLE de NOTationmedecin


-------------------------------------------------------------------------              */ 

CREATE TABLE NOTationmedecin (

    id int NOT NULL AUTO_INCREMENT,
    idmedecin int NOT NULL,
    idpatient int NOT NULL,
    nbetoile int NOT NULL,
    dajout timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT nt_idmedecin FOREIGN KEY(idmedecin) REFERENCES medecin(idmedecin) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT nt_idpatient FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
 );


 /* creation la TABLE de NOTationclinique


-------------------------------------------------------------------------              */ 

CREATE TABLE NOTationclinique (

    id int NOT NULL AUTO_INCREMENT,
    idclinique int NOT NULL,
    idpatient int NOT NULL,
    nbetoile int NOT NULL,
    dajout timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT nt_clinique FOREIGN KEY(idclinique) REFERENCES clinique(idclinique) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT nt_idpatient1 FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
 );


 /* creation la TABLE de NOTationpharmacie


-------------------------------------------------------------------------              */ 

CREATE TABLE NOTationpharmacie (

    id int NOT NULL AUTO_INCREMENT,
    idpharmacie int NOT NULL,
    idpatient int NOT NULL,
    nbetoile int NOT NULL,
    dajout timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT nt_pharmacie FOREIGN KEY(idpharmacie) REFERENCES pharmacie(idpharmacie) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT nt_idpatient2 FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
 );


 /* creation la TABLE de commentairmedecin


-------------------------------------------------------------------------              */ 

CREATE TABLE commentairmedecin (

    id int NOT NULL AUTO_INCREMENT,
    idmedecin int NOT NULL,
    idpatient int NOT NULL,
    contenus text NOT NULL,
    dajout timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT cm_idmedecin FOREIGN KEY(idmedecin) REFERENCES medecin(idmedecin) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT cm_idpatient FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
 );



 /* creation la TABLE de commentairclinique


-------------------------------------------------------------------------              */ 

CREATE TABLE commentairclinique (

    id int NOT NULL AUTO_INCREMENT,
    idclinique int NOT NULL,
    idpatient int NOT NULL,
    contenus text NOT NULL,
    dajout timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT cm_idclinique FOREIGN KEY(idclinique) REFERENCES clinique(idclinique) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT cm_idpatient1 FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
 );



  /* creation la TABLE de commentairpharmacie


-------------------------------------------------------------------------              */ 

CREATE TABLE commentairpharmacie (

    id int NOT NULL AUTO_INCREMENT,
    idpharmacie int NOT NULL,
    idpatient int NOT NULL,
    contenus text NOT NULL,
    dajout timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT cm_idpharmacie FOREIGN KEY(idpharmacie) REFERENCES pharmacie(idpharmacie) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT cm_idpatient2 FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
 );


   /* creation la TABLE de rendez-vousmedecin


-------------------------------------------------------------------------              */


CREATE TABLE rndvmedecin (
    
    id int NOT NULL AUTO_INCREMENT,
    idmedecin int NOT NULL,
    idpatient int NOT NULL,
    jour varchar(255) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT rndv_idmedecin FOREIGN KEY(idmedecin) REFERENCES medecin(idmedecin) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT rndv_idpatient FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
);

   /* creation la TABLE de rendez-vousclinique


-------------------------------------------------------------------------              */


CREATE TABLE rndvclinique (
    
    id int NOT NULL AUTO_INCREMENT,
    idpatient int NOT NULL,
    idservice int NOT NULL,
    jour varchar(255) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT rndv_idservice FOREIGN KEY(idservice) REFERENCES servicesclinique(idservice) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT rndv_idpatient1 FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
);


   /* creation la TABLE de Hispatient


-------------------------------------------------------------------------              */


CREATE TABLE hispatient (
    
    id int NOT NULL AUTO_INCREMENT,
    idmedecin int NOT NULL,
    idpatient int NOT NULL,
    jour date NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT his_idmedecin FOREIGN KEY(idmedecin) REFERENCES medecin(idmedecin) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT his_idpatient FOREIGN KEY(idpatient) REFERENCES patient(idpatient) ON DELETE CASCADE ON UPDATE CASCADE
);


/* creation la TABLE de Hispatient


-------------------------------------------------------------------------              */


   /* creation de l'index epmedecin


-------------------------------------------------------------------------              */

CREATE index epmedecin ON employemedecin(idmedecin);


 /* creation de l'index epclinique


-------------------------------------------------------------------------              */



CREATE index epclinique ON employeclinique(idclinique);


 /* creation de l'index eppharmacie


-------------------------------------------------------------------------              */

CREATE index eppharmacie ON employepharmacie(idpharmacie);


 /* creation de l'index epservicepharmacie


-------------------------------------------------------------------------              */

CREATE index eservicepharmacie on eservicepharmacie(idservice);


 /* creation de l'index eppclinque


-------------------------------------------------------------------------              */

CREATE index eserviceclinique on eserviceclinique(idservice);




 /* creation de l'index ntmedecin


-------------------------------------------------------------------------              */

CREATE index ntmedecin ON NOTationmedecin(idmedecin);

 /* creation de l'index ntpharmacie


-------------------------------------------------------------------------              */

CREATE index ntpharmacie ON NOTationpharmacie(idpharmacie);

 /* creation de l'index ntclinique


-------------------------------------------------------------------------              */

CREATE index ntclinique ON NOTationclinique(idclinique);

 /* creation de l'index cmmedecin


-------------------------------------------------------------------------              */

CREATE index cmmedecin ON commentairmedecin(idmedecin);


 /* creation de l'index cmclinique


-------------------------------------------------------------------------              */

CREATE index cmclinique ON commentairclinique(idclinique);


 /* creation de l'index cmpharmacie


-------------------------------------------------------------------------              */

CREATE index cmpharmacie ON commentairpharmacie(idpharmacie);

 /* creation de l'index rndvmedecin


-------------------------------------------------------------------------              */


CREATE index rndvmedecin ON rndvmedecin(idmedecin);



 /* creation de l'index rndnvmedecine-patient


-------------------------------------------------------------------------              */

CREATE index rndvmedecinpatient ON rndvmedecin(idmedecin,idpatient);

 /* creation de l'index rndvclinique


-------------------------------------------------------------------------              */

CREATE index rndvclinique ON rndvclinique(idservice);


/* creation de l'index rndvclinique-patient


-------------------------------------------------------------------------              */

CREATE index rndvcliniquepatient ON rndvclinique(idservice,idpatient);



