/*
rezept2.js

*/
/*
function sayHello(){
			alert('Opened App2.5 Hello');
}


function initRezept(rezept) {

    alert('initRezept von rezept.js ausgeführt');
	
	//var id =  $(rezept).attr('data-rezeptid');
	//var name = $(rezept).text();
	//  alert(id + name);
	
    fuegeZutatenhinzu();
    fuegeRezeptdetails();

    //var id = 7;
 

   // zeigeRezeptAn('Gulasch');
   //   fuegeZutatenInListviewEin(id);
    $('#mehr').on('click', mengeErhoehen);
    $('#weniger').on('click', mengeSenken);
    $('#favorisieren').on('click', rezeptmerken);

}

// device APIs are available

//id vom Aufruf
//var id;
//zeigeRezeptAn(id);

function mengeErhoehen(){

}
function mengeSenken(){

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
    //$('#rezeptimage').show();
    $('#rezeptimage').attr('src', 'css/img/goulash.jpg');
	$('#rezeptimage').show();
    $('#rezeptname').text('Gulasch');
}






// Rezept anzeigen
function zeigeRezeptAn(rezeptname) {
    readRezept(rezeptname, function(tx, results) {
        var rezept = results.rows.item(0);
        $('#rezeptname').text(rezept.Name);
        $('#rezeptimage').attr('src', rezept.Bild);

    });
    fuegeZutatenInListviewEin(rezept.RezeptID);
}

function fuegeZutatenInListviewEin(id){
    readZutaten(id, function(tx, results) {
                    $("#mengeliste").empty();
                    var len = results.rows.length;
                    if ( len > 0 ) {
                        for (var i = 0; i < len; i++) {
                            $("#mengeliste").append('<li>' + results.rows.item(i).Menge + ' ' + results.rows.item(i).Mengeneinheit + ' ' + results.rows.item(i).Name + '</li>');
                        }
                    } else{
                            $("#mengeliste").append('<li>Zutaten leider nicht bekannt</li>');
                    }
                    $("#mengeiste").listview('refresh');
                });
}

*/