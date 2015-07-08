var db;

function openDB() {
	db = window.openDatabase("Rezeptapp", "1", "Datenbank Rezeptapp", 1000000);
	db.transaction(createTables, errorCB, successCB);
}


function createTables(tx) {
	tx.executeSql("CREATE TABLE IF NOT EXISTS Rezepte (RezeptID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Name TEXT, Bild TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Merkliste (RezeptID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zubereitung (ZubereitungsID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, RezeptID INTEGER NOT NULL, Details TEXT, Art TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zutaten (ZutatID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, RezeptID INTEGER NOT NULL, Name TEXT, Menge INTEGER, Mengeneinheit TEXT)");
}

function errorCB(err) {
	alert('Fehler bei der Ausführung des SQLs: ' + err.code + ' - ' + err.message);
}



function successCB() {
	// alles okay, nichts ausgeben
}

function createRezept(name, bild, callback) {
	db.transaction(function(tx) {
		tx.executeSql("INSERT INTO Rezepte (Name, Bild) VALUES (?, ?)", [name, bild] , callback);
	}, errorCB, successCB);
}

function updateRezept(id, name, bild, callback) {
	db.transaction(function(tx) {
		tx.executeSql("UPDATE Rezepte SET Name = ?, Bild = ? WHERE ID = ?", [name, bild, id], callback);
	});
}

function readRezepte(callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT * FROM Rezepte ORDER BY Name ASC", [], callback);
	}, errorCB, successCB);
}

function readRezept(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT p.RezeptID, p.Name, p.Bild, FROM Rezepte p 
						LEFT JOIN Zutaten z ON z.RezeptID = p.RezeptID 
						LEFT JOIN Zubereitung x ON x.RezeptID = p.RezeptID 
						WHERE p.RezeptID = ? 
						GROUP BY p.ID, p.Name", [id], callback);
	}, errorCB, successCB);
}

function deleteRezept(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Rezepte WHERE ID = ?", [id], callback);
	});
}