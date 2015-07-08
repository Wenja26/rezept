var db;

function openDB() {
	db = window.openDatabase("Rezeptapp", "1", "Datenbank Rezeptapp", 1000000);
	db.transaction(createTables, errorCB, successCB);
}


function createTables(tx) {
	tx.executeSql("CREATE TABLE IF NOT EXISTS Rezepte (RezeptID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Name TEXT, Bild TEXT, ZubereitungsID INTEGER NOT NULL,  ZutatenID INTEGER NOT NULL)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Merkliste (RezeptID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zubereitung (ZubereitungsID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,  Details TEXT, Art TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zutaten (ZutatID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, , Name TEXT, Menge INTEGER, Mengeneinheit TEXT)");
}