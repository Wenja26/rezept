$(document).bind('pagebeforeshow',function() {
    openDB();
    $('#buttonSucheStarten').on('click',suche);
});


function suche() {
    var sucheInput = $('#sucheInput').val();
    var sucheAnhand = $('select-anhand').val();
    var suchefilter = $('select-filter').val();

    if (sucheInput.length == 0) {
        alert('Bitte alle Eingaben ausfuellen!');
        return;
    }

    if (sucheAnhand == 1) {


        if(suchefilter==1) {

            readRezeptFromName(name, function (tx, results) {

                $("#rezeptSucheListe").empty();
                var len = results.rows.length;
                if (len > 0) {
                    for (var i = 0; i < len; i++) {
                        $("#rezeptSucheListe").append('<li><a href="rezept.html" data-rezeptid="' + results.rows.item(i).RezeptID + '" data-transition="slide">  <img src="' + results.rows.item(i).Bild + '"><h2>' + results.rows.item(i).Name + '</h2></a></li>');
                    }
                }
                else {
                    $("#rezeptSucheListe").append('<li><h3>Kein Rezept gefunden</h3></li>');
                }
                $("#rezeptSucheListe").listview('refresh');


            });
        } else if(suchefilter==2){
            readRezeptFromNameVegetarisch(name, function (tx, results) {

                $("#rezeptSucheListe").empty();
                var len = results.rows.length;
                if (len > 0) {
                    for (var i = 0; i < len; i++) {
                        $("#rezeptSucheListe").append('<li><a href="rezept.html" data-rezeptid="' + results.rows.item(i).RezeptID + '" data-transition="slide">  <img src="' + results.rows.item(i).Bild + '"><h2>' + results.rows.item(i).Name + '</h2></a></li>');
                    }
                }
                else {
                    $("#rezeptSucheListe").append('<li><h3>Kein Rezept gefunden</h3></li>');
                }
                $("#rezeptSucheListe").listview('refresh');


            });
        } else{
            readRezeptFromNameVegan(name, function (tx, results) {

                $("#rezeptSucheListe").empty();
                var len = results.rows.length;
                if (len > 0) {
                    for (var i = 0; i < len; i++) {
                        $("#rezeptSucheListe").append('<li><a href="rezept.html" data-rezeptid="' + results.rows.item(i).RezeptID + '" data-transition="slide">  <img src="' + results.rows.item(i).Bild + '"><h2>' + results.rows.item(i).Name + '</h2></a></li>');
                    }
                }
                else {
                    $("#rezeptSucheListe").append('<li><h3>Kein Rezept gefunden</h3></li>');
                }
                $("#rezeptSucheListe").listview('refresh');


            });

        }

    }
    else{

    }


}

/*
$( document ).on( "pagecreate", "#myPage", function() {
    $( "#autocomplete" ).on( "filterablebeforefilter", function ( e, data ) {
        var $ul = $( this ),
            $input = $( data.input ),
            value = $input.val(),
            html = "";
        $ul.html( "" );
        if ( value && value.length > 2 ) {
            $ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
            $ul.listview( "refresh" );
            $.ajax({
                url: "http://gd.geobytes.com/AutoCompleteCity",
                dataType: "jsonp",
                crossDomain: true,
                data: {
                    q: $input.val()
                }
            })
            .then( function ( response ) {
                $.each( response, function ( i, val ) {
                    html += "<li>" + val + "</li>";
                });
                $ul.html( html );
                $ul.listview( "refresh" );
                $ul.trigger( "updatelayout");
            });
        }
    });
});
*/
/*
// Rezepte in Listview einfügen
function fuegeRezepteInListviewEin() {
    //eine Methode aus der db.js
    readRezepte(function(tx, results) {
                //       $("#autocompleteRezeptSuche").empty();
                var len = results.rows.length;
                if ( len > 0 ) {
					for (var i=0; i<len; i++ ) {
						$("#autocompleteRezeptSuche").append('<li><a href="rezept.html" data-rezeptid="' + results.rows.item(i).RezeptID + '" data-transition="slide">  <img src="'+ results.rows.item(i).Bild  +'"><h2>' + results.rows.item(i).Name + '</h2></a></li>');
					}
                }
                else {
					$("#autocompleteRezeptSuche").append('<li><h3>Kein Rezept angelegt</h3></li>');
					}
                $("#autocompleteRezeptSuche").listview('refresh');
                });
}
    */