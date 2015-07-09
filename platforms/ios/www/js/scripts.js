document.addEventListener("deviceready", startApp, false);


function startApp() {
	// Verbindung zur Datenbank öffnen
	alert('Opened App!');
	openDB();
	
	//alert('Opened App2!');

	//createDefaultData();
    //  sayHello();             
	ladeTagesrezepte()
	//$(uebersicht).center();
	
		
	
	//onDeviceReady3();
	alert('end');
}

function sayHello(){
			alert('Opened App2.5 Hello');
}



function createDefaultData(){
	var id;
	
	//alle vorher löschen
	/*
	readRezeptFromName("Gulasch", function(tx, results2) {
			var len1 = results2.rows.length;
			var id2;
			if ( len1 >0 ) {
				for (var i=0; i<len1; i++ ) {
					id2 = results2.rows.item(i).RezeptID;
					deleteRezept(id2);
					}
			}
		});	
		*/
	
	
	createRezept("Gulasch", "css/img/goulash.jpg", function() {
	
	readRezeptFromName("Gulasch", function(tx, results) {
			var len = results.rows.length;
			if ( len >0 ) {
			id = results.rows.item(0).RezeptID;
			}
	alert('id = ' + id);		
	alert('length = ' + len);		
	createZutat(id, 'Gulasch', '1', 'kg' );
	createZubereitung(id, 'Fleisch etwas kleiner schneiden, mit den Gewürzen würzen und anbraten, in der Zwischenzeit Zwiebeln vierteln und mitbraten.', 'Schneiden');
	createZubereitungsbild('Schneiden', 'css/img/schneiden.gif');
	alert('Loaded Data!');
	
		});	
	
	});
	
	
 }
 
 


// Timestamp in Sekunden zurückliefern
function getTimestamp() {
	return Math.floor(Date.now() / 1000);
}


function ladeTagesrezepte() {
	readRezepte(function(tx, results) {
        $("#scroller").empty();
        var len = results.rows.length;
		var random= 0;	
	//alert('length = ' + len);
	//data-rezeptid="' + results.rows.item(i).RezeptID + '"
        if ( len > 0 ) {
            for (var i=0; i<len; i++ ) {
			/*
				alert('results.rows.item(i).Name = ' + results.rows.item(i).Name);
				alert('results.rows.item(i).RezeptID = ' + results.rows.item(i).RezeptID);	
				alert('results.rows.item(i).Bild = ' + results.rows.item(i).Bild);
*/				
                $("#scroller").append('<div class="section"><div class="hp-highlight" style="background:url(' + results.rows.item(i).Bild + ') no-repeat 0 0"><div class="feature-headline"><h1><a href="rezept.html">'+results.rows.item(i).Name+'</a></h1></div></div></div>');            	
            }
        }
        else {
            $("#scroller").append('<li><h3>Kein Rezept angelegt</h3><p>Klicken Sie auf das Plus-Symbol oben rechts</p></li>');
        }
	});
}




jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

