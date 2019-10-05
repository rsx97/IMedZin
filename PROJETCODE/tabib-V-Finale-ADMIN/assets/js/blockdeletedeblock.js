

var idvalues = 0;

function idvalue(value){
    idvalues = value;

}
function changestatus(type,value){
var url = '/' +type + '/changestatus/'+ idvalues + '?value=' + value;
console.log(url);
$.ajax({
 url: url,
 method: 'PUT',
 contentType: 'application/json',
 success: function (result) {
    var id = '#'+type + idvalues;
    var user;
    if(value==0){
     user = "#block_"+type;
    }
    else {
     user = "#deblock_"+type;
    }
    $(user).modal('hide');
    $(id).fadeOut(1600,function(){
        $(id).remove();
    });
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

function deletes(type){
    var url = "/" + type + '/delete/' + idvalues;
    $.ajax({
     url: url,
     method: 'DELETE',
     contentType: 'application/json',
     success: function (result) {
         var id = '#'+type + idvalues;
         var user = "#delete_"+type;
         $(user).modal('hide');
         $(id).fadeOut(1600,function(){
             $(id).remove();
         });
    }
    });
    }

function Close(type,method){
    var id = "#"+method+"_"+type;
    $(id).modal('hide');
}


       function All(type){
           window.location.replace(type);
       }

        function Active(type){
            var url = type +'?status=1';
            window.location.replace(url);
        }
        function Blocked(type){
            var url = type + '?status=0'
            window.location.replace(url);
        }





