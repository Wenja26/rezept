
document.addEventListener("deviceready", onDeviceReady, true);

function onDeviceReady() {
    var id;
    fuegeSchritteInListviewEin(id);
}

function fuegeSchritteInListviewEin(rezeptid) {
    readZubereitungen(rezeptid, function(tx, results) {
               $("#zubereitungsliste").empty();
               var len = results.rows.length;
               if ( len > 0 ) {
               for (var i=0; i<len; i++ ) {
               console.log(results.rows.item(i));
               $("#zubereitungsliste").append(
                                     '<li> <img src="' +results.rows.item(i).Art +'"align="middle"><font style="white-space:normal; font-size:small">' + results.rows.item(i).Details+'</font><li>'
                                     );
               }
               }
               else {
               $("#zubereitungsliste").append('<li><h3>Keine Zubereitungsbeschreibung vorhanden</h3><p>Erfassen Sie Zubereitungsschritte in dem Home</p></li>');
               }
               $("#zubereitungsliste").listview('refresh');
               });
}