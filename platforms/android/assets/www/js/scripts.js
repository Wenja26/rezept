document.addEventListener("deviceready", startApp, false);


function startApp() {
	// Verbindung zur Datenbank öffnen
	openDB();
	
	$(uebersicht).center();
    
	
    fuegeZutatenhinzu();
    fuegeRezeptdetails();
                    


	
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

