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

    fuegeZutatinListview(zutat, menge, einheit);


}

function entferneZutat(){
    $('#zutatID'+zutaten.length).remove();

    zutaten.pop();
    mengen.pop();
    mengeneinheit.pop();



}


function fuegeArbeitsschrittHinzu(){
    var arbeitsschritt = $('#newArbeitsschritt').val();
    var arbeitsart = $('#selectArbeitsart').val();

    arbeitsschritte.push(arbeitsschritt);
    arbeitsarten.push(arbeitsart);

    fuegeArbeitsschrittinListview(arbeitsschritt, arbeitsart);

}

function entferneArbeitsschritt() {
    $('#arbeitsschritt'+arbeitsschritte.length).remove();
    arbeitsschritte.pop();
    arbeitsart.pop();

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


function fuegeArbeitsschrittinListview(arbeitsschritt, arbeitsart){
    $("#newArbeitsliste").empty();
    $("#newArbeitsliste").append('<div data-role="fieldcontain"><label id="arbeitsschritt'+arbeitsschritte.length+ '">'+arbeitsschritt+'</label><label id="arbeitsart">'+arbeitsart+'</label></div>');

    $("#newArbeitsliste").listview('refresh');

}


function fuegeZutatinListview(zutat, menge, einheit){
    $("#newZutatenliste").empty();
    $("#newZutatenliste").append('<div data-role="fieldcontain" class="ui-grid-a" id="zutatID'+zutaten.length+'"><div class="ui-block-b"><label id="zutat">'+zutat+'</label></div><div class="ui-block-c"><label id="zutatmenge">'+menge+'</label></div><div class="ui-block-c"><label id="zutatmengeeinheit">'+einheit+'</label></div></div>');
    $("#newZutatenliste").listview('refresh');

}