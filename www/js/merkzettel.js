document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert('onDeviceReady von merkzettel.js ausgeführt');
    fuegeRezepteInMerkzettelEin();

    $(document).on('click', '#merkzettelListview a', function() {
        alert('clicked rezept');
        initRezept(this);
    });

}


function fuegeRezepteInMerkzettelEin() {
    readMerkliste(function(tx, results) {
               $("#merkzettelListview").empty();
               var len = results.rows.length;
               if ( len > 0 ) {
                  for (var i=0; i<len; i++ ) {
                  console.log(results.rows.item(i));
                  $("#merkzettelListview").append('<li><a href ="#rezept.html"  data-rezeptid="' + results.rows.item(i).RezeptID + '"><img src="'+results.rows.item(i).Bild+'"><h2>'+results.rows.item(i).Name+'</h2></a><li>');
                  }
               }
               else {
               $("#merkzettelListview").append('<li><h3>Keine vermerkte Rezepte</h3><p>Suchen Sie Ihre Lieblingsrezepte aus</p></li>');
               }
               $("#merkzettelListview").listview('refresh');
               });
}