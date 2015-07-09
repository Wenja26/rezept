var zutaten = [];
var mengen = [];
var mengeneinheit = [];

var arbeitsschritte = [];
var arbeitsarten = [];


$( document ).ready(function() {

    $('#buttonZutat').on('click',fuegeZutatHinzu);
    $('#zutatEntfernen').on('click',entferneZutat);
    $('#buttonArbeitsschrittHinzufuegen').on('click',fuegeArbeitsschrittHinzu);
    $('#buttonArbeitsschrittLoeschen').on('click',entferneArbeitsschritt);
	$('#buttonRezeptSpeichern').on('click',legeRezeptAn);
});

//Zutat hinzufuegen
function fuegeZutatHinzu(){
    var zutat = $('#zutatText').val();
    var menge = $('#mengeText').val();
    var mengeneinheit =  $('#selectEinheit').val();

    zutaten.push(zutat);
    mengen.push(menge);
    mengeneinheiten.push(mengeneinheit);


}

function entferneZutat(){
    zutaten.pop();
    mengen.pop();
    mengeneinheit.pop();

}


function fuegeArbeitsschrittHinzu(){
    var arbeitsschritt = $('#newArbeitsschritt').val();
    var arbeitsart = $('#selectArbeitsart').val();

    arbeitsschritte.push(arbeitsschritt);
    arbeitsarten.push(arbeitsart);


}

function entferneArbeitsschritt() {

    arbeitsschritte.pop();
}


// Rezept anlegen
function legeRezeptAn() {
	var name = $('[name=rezeptname]').val();

	if (name.length == 0) {
		alert('Bitte Rezeptnamen eingeben!');
		return;
	}
	
	var bild="css/img/goulash.jpg";
	
	createRezept(name, bild, function() {
	//	fuegeProjekteInListviewEin();
		$('[name=rezeptname]').val('');
		history.back();
	});
	
	var id;
	readRezeptFromName(name, function(tx, results) {
		var len = results.rows.length;
                if ( len > 0 ) {
				id = results.rows.item(0).RezeptID;
				}
	});
    /*
	 $("#zutatID").each(function (i) {
         i.attr
         $("#zutat").each(function (a) {

         });
         $("#zutatmenge").each(function (b) {

         });
         $("#zutatmengeneinheit").each(function (c) {

         });
      });
	//$('#newZutatenliste')
	$('#newArbeitsliste').
	createZubereitung(id, details, art);
	createZutat(id, name, menge, mengeneinheit);
	*/
}


fuegeArbeitsschrittinListview(arbeitsschritte, arbeitsarten){

    $("#autocompleteRezeptSuche").append('<li><a href="rezept.html" data-rezeptid="' + results.rows.item(i).RezeptID + '" data-transition="slide">  <img src="'+ results.rows.item(i).Bild  +'"><h2>' + results.rows.item(i).Name + '</h2></a></li>');

    $("#autocompleteRezeptSuche").listview('refresh');

}