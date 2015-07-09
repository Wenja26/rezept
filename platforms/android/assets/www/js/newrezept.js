var zutaten = [];
var mengen = [];
var mengeneinheiten = [];

var arbeitsschritte = [];
var arbeitsarten = [];

var bild;

$(document).bind('pagebeforeshow',function() {
    openDB();
    $('#buttonZutat').on('click',fuegeZutatHinzu);
    $('#zutatEntfernen').on('click',entferneZutat);
    $('#buttonArbeitsschrittHinzufuegen').on('click',fuegeArbeitsschrittHinzu);
    $('#buttonArbeitsschrittLoeschen').on('click',entferneArbeitsschritt);
    $('#buttonRezeptSpeichern').on('click',legeRezeptAn);
    $('#buttonBild').on('click',ladeBild);
});

<!--
$( document ).ready(function() {

    $('#buttonZutat').on('click',fuegeZutatHinzu);
    $('#zutatEntfernen').on('click',entferneZutat);
    $('#buttonArbeitsschrittHinzufuegen').on('click',fuegeArbeitsschrittHinzu);
    $('#buttonArbeitsschrittLoeschen').on('click',entferneArbeitsschritt);
	$('#buttonRezeptSpeichern').on('click',legeRezeptAn);
});
    -->

//Zutat hinzufuegen
function fuegeZutatHinzu(){
    var zutat = $('#zutatText').val();
    var menge = $('#mengeText').val();
    var mengeneinheitNummer =  $('#selectEinheit').val();

    var mengeneinheit;

    switch(mengeneinheitNummer) {
        case 1:
            mengeneinheit = "g";
            break;
        case 2:
            mengeneinheit = "kg";
            break;
        case 3:
            mengeneinheit = "ml";
            break;
        case 4:
            mengeneinheit = "l";
            break;
        case 5:
            mengeneinheit = "msp";
            break;
        case 6:
            mengeneinheit = "Packung";
            break;
        case 7:
             mengeneinheit = "Stueck";
            break;
        default:
            mengeneinheit = "g";
    }

    if (zutat.length == 0 || menge.length == 0) {
        alert('Bitte alle Eingaben tätigen!');
        return;
    }

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

    $('#zutatText').val('');
    $('#mengeText').val('');
    $('#selectEinheit').val('');

}


function fuegeArbeitsschrittHinzu(){
    var arbeitsschritt = $('#newArbeitsschritt').val();
    var arbeitsartNummer = $('#selectArbeitsart').val();

    var arbeitsart;
    switch(arbeitsartNummer) {
        case 1:
            arbeitsart = "Keine Kategorie"
            break;
        case 2:
            arbeitsart = "Backen"
            break;
        case 3:
            arbeitsart = "Schneiden"
            break;
        case 4:
            arbeitsart = "Ruehren"
            break;
        case 5:
            arbeitsart = "Wuerzen"
            break;
        default:
            arbeitsart = "Keine Kategorie"
    }


    if (arbeitsschritt.length == 0) {
        alert('Bitte Arbeitschritt beschreiben!');
        return;
    }

    arbeitsschritte.push(arbeitsschritt);
    arbeitsarten.push(arbeitsart);

    fuegeArbeitsschrittinListview(arbeitsschritt, arbeitsart);

}

function entferneArbeitsschritt() {
    $('#arbeitsschritt'+arbeitsschritte.length).remove();
    arbeitsschritte.pop();
    arbeitsart.pop();


    $('#newArbeitsschritt').val('');
}


// Rezept anlegen
function legeRezeptAn() {
	var name = $('[name=rezeptname]').val();

	if (name.length == 0) {
		alert('Bitte Rezeptnamen eingeben!');
		return;
	}
	
	//var bild="css/img/goulash.jpg";
   // var bild  = ladeBild();
	
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

        for (var i=0; i<zutaten.length; i++ ) {
            createZutat(id, zutaten[i], mengen[i], mengeneinheiten[i]);

        }
        for (var i=0; i<arbeitsschritte.length; i++ ) {
            createZubereitung(id, arbeitsschritte[i], arbeitsarten[i]);
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
    $("#newArbeitsliste").append('<li><div data-role="fieldcontain"><label id="arbeitsschritt'+arbeitsschritte.length+ '">'+arbeitsschritt+'</label><label id="arbeitsart">'+arbeitsart+'</label></div></li>');

    $("#newArbeitsliste").listview('refresh');

}


function fuegeZutatinListview(zutat, menge, einheit){
    $("#newZutatenliste").empty();
    $("#newZutatenliste").append('<li><div data-role="fieldcontain" class="ui-grid-a" id="zutatID'+zutaten.length+'"><div class="ui-block-b"><label id="zutat">'+zutat+'</label></div><div class="ui-block-c"><label id="zutatmenge">'+menge+'</label></div><div class="ui-block-d"><label id="zutatmengeeinheit">'+einheit+'</label></div></div></li>');
    $("#newZutatenliste").listview('refresh');

}

function ladeBild(){
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.NATIVE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
}


function onSuccess(imageURI) {
    /*
    $('#image').show();
    $('#image').attr('src',imageURI);
    $('#camera').hide();
    */
    bild =imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
