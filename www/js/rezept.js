document.addEventListener("deviceready", onDeviceReady, true);

function onDeviceReady() {
    fuegeZutatenhinzu();
    fuegeRezeptdetails();
}
// device APIs are available

//id vom Aufruf
var id;
zeigeRezeptAn(id);



function fuegeZutatenhinzu(){
alert('Opened App3!');

    $('#mengeliste').empty();
    $('#mengeliste').append('<li>1 kg Gulasch</li>');
    $('#mengeliste').listview('refresh');
}


function fuegeRezeptdetails(){
    $('#rezeptbild').show();
    $('#rezeptbild').attr('src', "css/img/goulash.jpg");
	$('#rezeptbild').show();
    $('#rezeptname').text('Gulasch');
}



/*


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
*/

// Projekt anzeigen
function zeigeRezeptAn(id) {
    readRezept(id, function(tx, results) {
        var rezept = results.rows.item(0);
        $('#rezeptname').text(rezept.Name);
        $('#rezeptimage').attr('src', rezept.Bild);

    });
    fuegeZutatenInListviewEin(id);
}

function fuegeZutatenInListviewEin(id){
    readZutaten(id, function(tx, results) {
                    $("#mengeListe").empty();
                    var len = results.rows.length;
                    if ( len > 0 ) {
                        for (var i = 0; i < len; i++) {
                            $("#mengeListe").append('<li>' + results.rows.item(i).Menge + results.rows.item(i).Mengeneinheit + results.rows.item(i).Name + '</li>');
                        }
                    } else{
                            $("#mengeListe").append('<li>Zutaten leider nicht bekannt</li>');
                        }
                    $("#mengeliste").listview('refresh');
                });
}