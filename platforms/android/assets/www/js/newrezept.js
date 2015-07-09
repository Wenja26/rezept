
$( document ).ready(function() {

	$('#buttonRezeptSpeichern').on('click',legeRezeptAn);
});

// Rezept anlegen
function legeProjektAn() {
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
				id = esults.rows.item(0).RezeptID;
				}
	});
	
	$('#newZutatenliste').
	$('#newArbeitsliste').
	createZubereitung(id, details, art);
	createZutat(id, name, menge, mengeneinheit);
}