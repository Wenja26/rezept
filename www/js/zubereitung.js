


function fuegeSchritteInListviewEin(rezeptid) {
    readZubereitungen(rezeptid, function(tx, results) {
               $("#listview").empty();
               var len = results.rows.length;
               if ( len > 0 ) {
               for (var i=0; i<len; i++ ) {
               console.log(results.rows.item(i));
               $("#listview").append(
                                     '<li> <img src="' +results.rows.item(i).Art +'"align="middle"><font style="white-space:normal; font-size:small">' + results.rows.item(i).Details+'</font><li>'
                                     );
               }
               }
               else {
               $("#listview").append('<li><h3>Keine Zubereitungsbeschreibung vorhanden</h3><p>Erfassen Sie Zubereitungsschritte in dem Home</p></li>');
               }
               $("#listview").listview('refresh');
               });
}