

$( document ).ready(function() {

    fuegeZutatenhinzu();
    fuegeRezeptdetails();
                    
});



function fuegeZutatenhinzu(){
    $("#mengeListe").empty();
    $("#mengeListe").append('<li>1 kg Gulasch </li>');
    $("#mengeListe").listview('refresh');
}

function fuegeRezeptdetails(){
    $('#image').show();
    $('#image').attr('src', "css/img/goulash.jpg");
    $('#rezeptname').text('Gulasch');
}