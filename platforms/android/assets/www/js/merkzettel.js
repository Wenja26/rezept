$(document).bind('pagebeforeshow',function() {
    openDB();
    fuegeRezepteInMerkzettelEin();
    function onDeviceReady() {
<<<<<<< HEAD
        // alert('onDeviceReady von merkzettel.js ausgeführt');
=======
       // alert('onDeviceReady von merkzettel.js ausgeführt');
>>>>>>> 6bb0175f8fcdffd1d6d99f3d2d26b50f3d8e63d2
        fuegeRezepteInMerkzettelEin();

    }
});


function fuegeRezepteInMerkzettelEin() {
    //alert("onDeviceReady of merkzetteljs");


<<<<<<< HEAD
    readRezepte(
        function(tx, results) {
            $("#merkzettelListview").empty();
            var len = results.rows.length;
            if ( len > 0 ) {
                for (var i=0; i<len; i++ ) {
                    console.log(results.rows.item(i));
                    $("#merkzettelListview").append('<li><a rel="external" href ="rezept.html?rezeptName='+results.rows.item(i).Name+'"><img src="'+results.rows.item(i).Bild+'"><h2>'+results.rows.item(i).Name+'</h2></a><li>');
                }
            }
            else {
                $("#merkzettelListview").append('<li><h3>Keine vermerkte Rezepte</h3><p>Suchen Sie Ihre Lieblingsrezepte aus</p></li>');
            }
            $("#merkzettelListview").listview('refresh');
        });
=======
    readMerkliste(
     function(tx, results) {
     $("#merkzettelListview").empty();
     var len = results.rows.length;
     if ( len > 0 ) {
     for (var i=0; i<len; i++ ) {
     console.log(results.rows.item(i));
     $("#merkzettelListview").append('<li><a rel="external" href ="rezept.html?rezeptName='+results.rows.item(i).Name+'"><img src="'+results.rows.item(i).Bild+'"><h2>'+results.rows.item(i).Name+'</h2></a><li>');
     }
     }
     else {
     $("#merkzettelListview").append('<li><h3>Keine vermerkte Rezepte</h3><p>Suchen Sie Ihre Lieblingsrezepte aus</p></li>');
     }
     $("#merkzettelListview").listview('refresh');
     });
>>>>>>> 6bb0175f8fcdffd1d6d99f3d2d26b50f3d8e63d2

}