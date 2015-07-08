var db;

function openDB() {
	db = window.openDatabase("Rezeptapp", "1", "Datenbank Rezeptapp", 1000000);
	db.transaction(createTables, errorCB, successCB);
}


function createTables(tx) {
	tx.executeSql("CREATE TABLE IF NOT EXISTS Rezepte (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Name TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Merkliste (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ProjektID INTEGER NOT NULL, Taetigkeit TEXT, Von INTEGER, Bis INTEGER)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Merkliste (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ProjektID INTEGER NOT NULL, Taetigkeit TEXT, Von INTEGER, Bis INTEGER)");
}