document.addEventListener("deviceready", startApp, false);


function startApp() {
	// Verbindung zur Datenbank öffnen
	alert('Opened App!');
	openDB();
	
	alert('Opened App2!');
   
	sayHello();
	//createDefaultData();
      //sayHello();             
	//ladeTagesrezepte()
	//$(uebersicht).center();
	
		alert('end');
	
}

function sayHello(){
			alert('Opened App2.5 Hello');
}

 /*
function createDefaultData(){
	var id;
	
	createRezept("Gulasch", "css/img/goulash.jpg");
	readRezept("Gulasch", function(tx, results) {
			var len = results.rows.length;
			if ( len >0 ) {
			id = results.rows.item(0);
			}
		};)	
	createZutat(id, "Gulasch", "1", "kg" );
	createZubereitung(id, "Fleisch etwas kleiner schneiden, mit den Gewürzen würzen und anbraten, in der Zwischenzeit Zwiebeln vierteln und mitbraten.", "Schneiden");
	createZubereitungsbild("Schneiden", "css/img/schneiden.gif");
	alert('Loaded Data!');
 }
 


// Timestamp in Sekunden zurückliefern
function getTimestamp() {
	return Math.floor(Date.now() / 1000);
}

/*
function ladeTagesrezepte() {
	readRezepte(function(tx, results) {
        $("#tagesRezeptList").empty();
        var len = results.rows.length;
		var random= 0;
        if ( len > 0 ) {
            for (var i=0; i<len; i++ ) {
                $("#tagesRezeptList").append(
				'<div class="section">
						<div class="hp-highlight" style="background:url(' + results.rows.item(i).Name + ') no-repeat 0 0">
							<div class="feature-headline">
								<h1><a href="rezept.html" data-projektid="' + results.rows.item(i).Name + '"></a></h1>
							</div>
						</div>
				</div>'
				);            	
            }
        }
        else {
            $("#tagesRezeptList").append('<li><h3>Kein Rezept angelegt</h3><p>Klicken Sie auf das Plus-Symbol oben rechts</p></li>');
        }
        $("#tagesRezeptList").listview('refresh');
	});
}

*/
/*


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

*/