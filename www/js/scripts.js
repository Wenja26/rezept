document.addEventListener("deviceready", startApp, false);


function startApp() {
	// Verbindung zur Datenbank öffnen
	//openDB();
	
	$(uebersicht).center();
    
	$( document ).ready(function() {

    fuegeZutatenhinzu();
    fuegeRezeptdetails();
                    
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

