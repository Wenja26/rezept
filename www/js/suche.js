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


<<<<<<< HEAD
// Rezepte in Listview einfügen
function fuegeProjekteInListviewEin() {
    //eine Methode aus der db.js
    readRezepte(function(tx, results) {
                //       $("#autocompleteRezeptSuche").empty();
                var len = results.rows.length;
                if ( len > 0 ) {
                for (var i=0; i<len; i++ ) {
                $("#autocompleteRezeptSuche").append('<li><a href="#projekt" data-projektid="' + results.rows.item(i).ID + '" data-transition="slide">' + results.rows.item(i).Name + '<p>Dauer: ' + results.rows.item(i).Dauer + '</p></a></li>');
                }
                }
                else {
                $("#autocompleteRezeptSuche").append('<li><h3>Kein Rezept angelegt</h3></li>');
                }
                $("#autocompleteRezeptSuche").listview('refresh');
                });
}
=======
>>>>>>> fd81ad180234c042b037ba131a8d082802cbf6f0
