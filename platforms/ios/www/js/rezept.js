
document.addEventListener("deviceready", onDeviceReady2, false);
function onDeviceReady2() {

    alert('onDeviceReady von rezept.js ausgeführt');
	/*
=======

>>>>>>> efc44603130fdae642469e8b106fe82a21a71d7e
    fuegeZutatenhinzu();
    fuegeRezeptdetails();

    var id;
    zeigeRezeptAn(id);
    fuegeZutatenInListviewEin(id);
    $('#mehr').on('click', mengeErhoehen);
    $('#weniger').on('click', mengeSinken);
    $('#favorisieren').on('click', rezeptmerken);

}
<<<<<<< HEAD
/*
// device APIs are available
=======

>>>>>>> efc44603130fdae642469e8b106fe82a21a71d7e

//id vom Aufruf
var id;
zeigeRezeptAn(id);

function mengeErhoehen(){
    readZutaten(id, function(tx, results) {
        $("#mengeListe").empty();
        var len = results.rows.length;
        if ( len > 0 ) {
            for (var i = 0; i < len; i++) {
                var mengeNeu = results.rows.item(i).Menge * 2;
                $("#mengeListe").append('<li>' + mengeNeu + ' ' + results.rows.item(i).Mengeneinheit + ' ' + results.rows.item(i).Name + '</li>');
            }
        } else{
            $("#mengeListe").append('<li>Zutaten leider nicht bekannt</li>');
        }
        $("#mengeliste").listview('refresh');
    });

}
function mengeSinken(){
    readZutaten(id, function(tx, results) {
        $("#mengeListe").empty();
        var len = results.rows.length;
        if ( len > 0 ) {
            for (var i = 0; i < len; i++) {
                var mengeNeu = results.rows.item(i).Menge / 2;
                $("#mengeListe").append('<li>' + mengeNeu + ' ' + results.rows.item(i).Mengeneinheit + ' ' + results.rows.item(i).Name + '</li>');
            }
        } else{
            $("#mengeListe").append('<li>Zutaten leider nicht bekannt</li>');
        }
        $("#mengeliste").listview('refresh');
    });

}
function rezeptmerken(){
    merkeRezept(id, function(){
        alert("Rezept vermerkt!");
    });

}

function fuegeZutatenhinzu(){
    $('#mengeliste').empty();
    $('#mengeliste').append('<li>1 kg Gulasch</li>');
    $('#mengeliste').listview('refresh');
}


function fuegeRezeptdetails(){
    $('#rezeptbild').show();
    $('#rezeptbild').attr('src', 'css/img/goulash.jpg');
	$('#rezeptbild').show();
    $('#rezeptname').text('Gulasch');
}






function fuegeRezeptdetails(){
    $('#image').show();
    $('#image').attr('src', "css/img/goulash.jpg");
    $('#rezeptname').text('Gulasch');
}


function fuegeZutatenhinzu(){
    $("#mengeListe").empty();
    $("#mengeListe").append('<li>1 kg Gulasch </li>');
    $("#mengeListe").listview('refresh');
}
<<<<<<< HEAD
*/
/*
=======

>>>>>>> efc44603130fdae642469e8b106fe82a21a71d7e
// Projekt anzeigen
function zeigeRezeptAn(rezeptname) {
    readRezept(rezeptname, function(tx, results) {
        var rezept = results.rows.item(0);
        id = rezept.RezeptID;
        $('#rezeptname').text(rezept.Name);
        $('#rezeptimage').attr('src', rezept.Bild);

    });
    fuegeZutatenInListviewEin(rezept.RezeptID);
}

function fuegeZutatenInListviewEin(id){
    readZutaten(id, function(tx, results) {
                    $("#mengeListe").empty();
                    var len = results.rows.length;
                    if ( len > 0 ) {
                        for (var i = 0; i < len; i++) {
                            $("#mengeListe").append('<li>' + results.rows.item(i).Menge + ' ' + results.rows.item(i).Mengeneinheit + ' ' + results.rows.item(i).Name + '</li>');
                        }
                    } else{
                            $("#mengeListe").append('<li>Zutaten leider nicht bekannt</li>');
                    }
                    $("#mengeliste").listview('refresh');
                });
}