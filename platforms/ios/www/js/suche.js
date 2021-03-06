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