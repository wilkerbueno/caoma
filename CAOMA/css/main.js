$(function(){
   // equivalente ao load da nossa pagina 
    $("#modal01").modal({backdrop:false, keyboard:false});
    $("#modal01").modal("show");
    setTimeout(function(){
        $("#modal01").modal("hide");
    }, 3000);
    
    $(".ttp").tooltip()       
});