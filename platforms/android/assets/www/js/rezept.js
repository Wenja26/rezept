
$( document ).ready(function() {

	
    fuegeZutatenhinzu();
    fuegeRezeptdetails();
                    
});
// device APIs are available

var rezeptID;


function fuegeZutatenhinzu(){
alert('Opened App3!');

    $('#mengeliste').empty();
    $('#mengeliste').append('<li>1 kg Gulasch</li>');
	$("#mengeliste").append('<li><h3>Kein Projekt angelegt</h3><p>Klicken Sie auf das Plus-Symbol oben rechts</p></li>');
    $('#mengeliste').listview('refresh');
		alert('Loaded Data2!');
}


function fuegeRezeptdetails(){
    $('#rezeptbild').show();
    $('#rezeptbild').attr('src', "css/img/goulash.jpg");
	$('#rezeptbild').show();
    $('#rezeptname').text('Gulasch');
		alert('Loaded Data3!');
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
function zeigeRezeptAn(rezept) {
    var id = $(rezept).attr('data-rezeptid');
    readRezept(id, function(tx, results) {
                var rezept = results.rows.item(0);
                $('#rezeptname').text(rezept.Name);
                $('#rezeptimage').attr('src',rezept.Bild);
                fuegeZutatenInListviewEin(rezept.RezeptID);

}

function fuegeZutatenInListviewEin(id){
    readZutaten(id, function(tx, results) {
                    $("#mengeListe").empty();
                    var len = results.rows.length;
                    if ( len > 0 ) {
                        for (var i=0; i<len; i++ )
                        {
                            $("#mengeListe").append('<li>' + rows.item(i).Menge  + results.rows.item(i).Mengeneinheit  + results. + results.rows.item(i).Name '</li>');
                        }
                        else{
                            $("#mengeListe").append('<li>Zutaten leider nicht bekannt</li>');
                        }
                    $("#mengeliste").listview('refresh');
                });
}