function checkmail(node,type){
 var url = '/' + type +'/checkmail/' + node.value;
 console.log(url);  
    $.ajax({
        url : url,
        method : 'GET',
        contentType: 'application/json',
        success : function(result) {

            var id = type + '-form-btn';
               
             if(result == "exist"){
                 
                 document.getElementById(id).disabled = false;
             }
             else {
                 document.getElementById(id).disabled = true;
             }
        }
    })
}

function checkphone(node,type){
    var url = '/' + type +'/checkphone/' + node.value;
 console.log(url);  
    $.ajax({
        url : url,
        method : 'GET',
        contentType: 'application/json',
        success : function(result) {

            var id = type + '-form-btn';
               
             if(result == "exist"){
                 console.log('yes');
                 document.getElementById(id).disabled = true;
             }
             else {
                 console.log('no');
                 document.getElementById(id).disabled = false;
             }
        }
    })
   
}