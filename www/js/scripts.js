document.addEventListener("deviceready", startApp, false);


function startApp() {
	// Verbindung zur Datenbank öffnen
	openDB();
	
	$(uebersicht).center();
    
	
    fuegeZutatenhinzu();
    fuegeRezeptdetails();
                   

	
}

function createDefaultData(){
	var id;
	 createRezept("Gulasch", "css/img/goulash.jpg", function() {
			//result.name
		}););
	readRezept("Gulasch", function(tx, results) {
			var len = results.rows.length;
			if ( len >0 ) {
			id = results.rows.item(0);
			}
		};)
		}
	createZutat(id, "Gulasch", "1", "kg" );
	createZubereitung(id, "Fleisch etwas kleiner schneiden, mit den Gewürzen würzen und anbraten, in der Zwischenzeit Zwiebeln vierteln und mitbraten.", "Schneiden", callback);
	createZubereitungsbild("Schneiden", "css/img/schneiden.gif", callback);
 }

function fuegeZutatenhinzu(){
    $('#mengeListe').empty();
    $('#mengeListe').append('<li>1 kg Gulasch </li>');
    $('#mengeListe').listview('refresh');
}

function fuegeRezeptdetails(){
    $('#image').show();
    $('#image').attr('src', "css/img/goulash.jpg");
	$('#image').show();
    $('#rezeptname').text('Gulasch');
}



jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

