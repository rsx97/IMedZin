

// check password if the same
function checkpassword(pas,pas1){
        
    return pas==pas1;
       
}

function checkemail(email){

    const format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    return format.test(email);

}


function checknumber(numtel){

    var format = /^\d{10}$/g;
    
    return format.test(numtel);
}

function validform(type){
    var checker = 0;

    const name = document.getElementsByName('nom')[0];
    const prenom = document.getElementsByName('prenom')[0];
    const email = document.getElementsByName('email')[0];
    const pas = document.getElementsByName('password')[0];
    const pas1 = document.getElementsByName('cpassword')[0];
    const adr = document.getElementsByName('adr')[0];
    const codpos = document.getElementsByName('codepos')[0];
    const numtel = document.getElementsByName('numtel')[0];
    const CV = document.getElementsByName('CV')[0];
    const adr1 = document.getElementsByName('adr1')[0];

    
     
    

    //le test 
    if(name.value==""){

        name.style.borderColor="red";
        checker++
    }
    else {

        name.style.borderColor="";
        checker--;
    };

    if(prenom.value==""){
        
        prenom.style.borderColor="red";
        checker++
    }
    else {

        prenom.style.borderColor="";
        checker--;
    };

    if(!checkemail(email.value) || email.value==""){

       email.style.borderColor="red";
       checker++

    }
    else if (checkemail(email.value)){

        email.style.borderColor="";
        checker--;
    };

    if(!checkpassword(pas.value,pas1.value) || (pas.value=="")){

        pas.style.borderColor = "red";
        pas1.style.borderColor = "red";
        checker++
    }
    else if(pas.value!=""){
        pas.style.borderColor="";
        pas1.style.borderColor="";
        checker--;
    };

    

    if(adr.value==""){

        adr.style.borderColor = "red";
        checker++
    }

    else {

        adr.style.borderColor= "";
        checker--;
    };

    if(codpos.value==""){

        codpos.style.borderColor = "red";
        checker++
    }

    else {

        codpos.style.borderColor= "";
        checker--;
    };



    if(!checknumber(numtel.value) || numtel.value==""){
        
        numtel.style.borderColor="red";
        checker++;
    }
    else if (checknumber(numtel.value)){

        numtel.style.borderColor ="";
        checker--;
    };

    if(type==="add"){

    if(CV.files.length==0){

        CV.style.borderColor = "red";
        checker++
    }

    else {

        CV.style.borderColor= "";
        checker--;
    };
}

    if (adr1.value == ""){
        adr1.style.borderColor = "red";
        checker++;
    }
    else {
        adr1.style.borderColor ="";
        checker--;
    }

    console.log(checker);
    if (checker==-9 && type==="add"){

        document.getElementById('add-ph').submit();
    }
    else if (checker==-8 && type==="update"){
     
       document.getElementById('add-ph').submit();


    }


    
     
}





function validformdoctor(type){
    var checker=0;
    const name = document.getElementsByName('nom')[0];
    const prenom = document.getElementsByName('prenom')[0];
    const email = document.getElementsByName('email')[0];
    const pas = document.getElementsByName('password')[0];
    const pas1 = document.getElementsByName('cpassword')[0];
    const adr = document.getElementsByName('adr')[0];
    const codpos = document.getElementsByName('codepos')[0];
    const numtel = document.getElementsByName('numtel')[0];
    const CV = document.getElementsByName('CV')[0];
    const adr1 = document.getElementsByName('adr1')[0];
    const specialite = document.getElementsByName('specialite')[0];
    const datene = document.getElementsByName('datene')[0];

    


    
     
    

    //le test 
    if(name.value==""){

        name.style.borderColor="red";
        checker++
    }
    else {

        name.style.borderColor="";
        checker--;
    };

    if(prenom.value==""){
        
        prenom.style.borderColor="red";
        checker++
    }
    else {

        prenom.style.borderColor="";
        checker--;
    };

    if(!checkemail(email.value) || email.value==""){

       email.style.borderColor="red";
       checker++

    }
    else if (checkemail(email.value)){

        email.style.borderColor="";
        checker--;
    };

    if(!checkpassword(pas.value,pas1.value) || (pas.value=="")){

        pas.style.borderColor = "red";
        pas1.style.borderColor = "red";
        checker++
    }
    else if(pas.value!=""){
        pas.style.borderColor="";
        pas1.style.borderColor="";
        checker--;
    };

    

    if(adr.value==""){

        adr.style.borderColor = "red";
        checker++
    }

    else {

        adr.style.borderColor= "";
        checker--;
    };

    if(codpos.value==""){

        codpos.style.borderColor = "red";
        checker++
    }

    else {

        codpos.style.borderColor= "";
        checker--;
    };



    if(!checknumber(numtel.value) || numtel.value==""){
        
        numtel.style.borderColor="red";
        checker++;
    }
    else if (checknumber(numtel.value)){

        numtel.style.borderColor ="";
        checker--;
    };

    if(type=="add"){

    if(CV.files.length==0){

        CV.style.borderColor = "red";
        checker++
    }

    else {

        CV.style.borderColor= "";
        checker--;
    };
};

    if (adr1.value == ""){
        adr1.style.borderColor = "red";
        checker++;
    }
    else {
        adr1.style.borderColor ="";
        checker--;
    }
    if (specialite.value == ""){
        specialite.style.borderColor = "red";
        checker++;
    }
    else {
        specialite.style.borderColor ="";
        checker--;
    }
    if (datene.value == ""){
        datene.style.borderColor = "red";
        checker++;
    }
    else {
        datene.style.borderColor ="";
        checker--;
    }

    console.log(checker);
    if (checker==-11 && type==="add"){

        document.getElementById('add-ph').submit();
    }
    else if(checker == -10 && type==="update") {
        document.getElementById('add-ph').submit();
    }


    
     
}

function validformclinic(type){
    var checker=0;
    const name = document.getElementsByName('nom')[0];
    const email = document.getElementsByName('email')[0];
    const pas = document.getElementsByName('password')[0];
    const pas1 = document.getElementsByName('cpassword')[0];
    const adr = document.getElementsByName('adr')[0];
    const codpos = document.getElementsByName('codepos')[0];
    const numtel = document.getElementsByName('numtel')[0];
    const CV = document.getElementsByName('CV')[0];
    const adr1 = document.getElementsByName('adr1')[0];
    console.log(adr1.value);
     
    

    //le test 
    if(name.value==""){

        name.style.borderColor="red";
        checker++
    }
    else {

        name.style.borderColor="";
        checker--;
    };


    if(!checkemail(email.value) || email.value==""){

       email.style.borderColor="red";
       checker++

    }
    else if (checkemail(email.value)){

        email.style.borderColor="";
        checker--;
    };

    if(!checkpassword(pas.value,pas1.value) || (pas.value=="")){

        pas.style.borderColor = "red";
        pas1.style.borderColor = "red";
        checker++
    }
    else if(pas.value!=""){
        pas.style.borderColor="";
        pas1.style.borderColor="";
        checker--;
    };

    

    if(adr.value==""){

        adr.style.borderColor = "red";
        checker++
    }

    else {

        adr.style.borderColor= "";
        checker--;
    };

    if(codpos.value==""){

        codpos.style.borderColor = "red";
        checker++
    }

    else {

        codpos.style.borderColor= "";
        checker--;
    };



    if(!checknumber(numtel.value) || numtel.value==""){
        
        numtel.style.borderColor="red";
        checker++;
    }
    else if (checknumber(numtel.value)){

        numtel.style.borderColor ="";
        checker--;
    };

    if(type==="add"){

    if(CV.files.length==0){

        CV.style.borderColor = "red";
        checker++
    }

    else {

        CV.style.borderColor= "";
        checker--;
    };

};

    if (adr1.value == ""){
        adr1.style.borderColor = "red";
        checker++;
    }
    else {
        adr1.style.borderColor ="";
        checker--;
    }

    console.log(checker);
    if (checker==-8 && type==="add"){

        document.getElementById('add-ph').submit();
    }
    else if (checker==-7 && type==="update"){

        document.getElementById('add-ph').submit();
    }


    
     
}
 var check = 1,check1=1;
function checkmail(node,type){
    var id = type + '-form-btn';
    if (firstmail!=node.value && node.value!=""){
    var url = '/' + type +'/checkmail/' + node.value;
       $.ajax({
           url : url,
           method : 'GET',
           contentType: 'application/json',
           success : function(result) {
   
                  
                if(result == "exist"){
                    check=0;
                    document.getElementsByName('email')[0].style.borderColor = 'red';
                }
                else {
                    check=1;
                    document.getElementsByName('email')[0].style.borderColor = '';
                }
                disablebtn(id);
           }
       })
    }
    else {
        check = 1;
        disablebtn(id);
        document.getElementsByName('email')[0].style.borderColor = '';
    }
   }
   
   function checkphone(node,type){
       var id = type + '-form-btn';
       console.log(firstphone==node.value);
       console.log(id);
       if(firstphone!=node.value && node.value!=""){
       var url = '/' + type +'/checkphone/' + node.value;
       $.ajax({
           url : url,
           method : 'GET',
           contentType: 'application/json',
           success : function(result) {
   
                console.log(result);
                  
                if(result == "exist"){
                    check1=0;
                    document.getElementsByName('numtel')[0].style.borderColor = 'red';
                    
                }
                else {
                    check1=1;
                    document.getElementsByName('numtel')[0].style.borderColor = '';
                }
                disablebtn(id);
           }
       })
    }

    else {
        check1=1;
        disablebtn(id);
        document.getElementsByName('numtel')[0].style.borderColor = '';
    }
      
   }

   function disablebtn(id){

    if(check1==1 && check==1){
        console.log(check+'/'+check1);
        document.getElementById(id).disabled = false;
    }
    else {
        document.getElementById(id).disabled = true;
    }
}

var firstmail,firstphone ;

function getfirstmail(value){
      firstmail= value;
}

function getfirstphone(value){
    firstphone = value;
}





