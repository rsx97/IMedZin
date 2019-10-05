var url = new URL(window.location.href);

var person= url.searchParams.get("person");

var idvalues = 0;

if (person==null){
    person = "doctor";
}

function idvalue(value){
    idvalues = value;

}
function ajaxclinicP(id){
$.ajax({
 url: '/approval/block/' + id + "?person="+person,
 method: 'PUT',
 contentType: 'application/json',
 success: function (result) {
     var ids = "idP01" + id;
     console.log(ids);
     var approved = document.getElementById(ids).parentNode.parentNode.children[0];
     approved.text= "Pending";
     approved.style = "red";
     

    /**  $("#idP01").click(function(){
                
        $("#textchange").text("Pending");
        $("#textchange").css("background-color","rgb(255, 229, 230)");
        $("#textchange").css("border-color","rgb(254, 0, 0);)");
    });
 } 
}*/
 } 
});
}

function ajaxclinicA(id){
$.ajax({
 url: '/approval/deblock/' + id + "?person="+person,
 method: 'PUT',
 contentType: 'application/json',
 success: function (result) {
    var ids = "idP01" + id;
    console.log(ids);
    var approved = document.getElementById(ids).parentNode.parentNode.children[0];
    approved.text= "Approved";
    approved.style.color= "green";
}
});
}
function ajaxdeleteapproval(){
    console.log(idvalues);
    console.log('/approval/delete/' + idvalues+ "?person="+person);
    $.ajax({
     url: '/approval/delete/' + idvalues + "?person="+person,
     method: 'DELETE',
     contentType: 'application/json',
     success: function (result) {
        var id = "#tr" + idvalues;
        console.log(id);
        var user = "#delete_pf";
        $(user).modal('hide');
        $(id).fadeOut(1600,function(){
            $(id).remove();
        });
    }
    });
    }

 function ajaxdeleteappointmentdoctor(){
        
        $.ajax({
         url: '/doctors-appointments/delete/' + idvalues,
         method: 'DELETE',
         contentType: 'application/json',
         success: function (result) {
         var id = "#tr" + idvalues;
         console.log(id);
         var user = "#delete_appointment";
         $(user).modal('hide');
         $(id).fadeOut(1600,function(){
             $(id).remove();
         });
        }
        });
        }
function ajaxdeleteappointmentclinic(){
            
            $.ajax({
             url: '/clinics-appointments/delete/' + idvalues,
             method: 'DELETE',
             contentType: 'application/json',
             success: function (result) {
                var id = "#tr" + idvalues;
                console.log(id);
                var user = "#delete_appointment";
                $(user).modal('hide');
                $(id).fadeOut(1600,function(){
                    $(id).remove();
                });
            },
            err : function(err){
                console.log(err);
            }
            });
}

function deleteservice(type){
    var url = '/service-' + type +'/delete/'+idvalues;
    console.log(url); 
    $.ajax({
        url: url,
        method: 'DELETE',
        contentType: 'application/json',
        success: function (result) {
            var service = '#delete_service'+type;
            $(service).modal('hide');
            var id = '#tr'+idvalues;
            $(id).fadeOut(1600,function(){
              $(id).remove();
            });
       },
       err : function(err){
           console.log(err);
       }
       });

}



    
function getPatient(){
    window.location.replace('approval?person=patient');
}

function getDoctor(){
    window.location.replace('approval?person=doctor');
}

function getPharmacy(){
    window.location.replace('approval?person=pharmacy');
}

function getClinic(){
    window.location.replace('approval?person=clinic');
}





