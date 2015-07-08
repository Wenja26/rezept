var db;

function openDB() {
	db = window.openDatabase("Rezeptapp", "1", "Datenbank Rezeptapp", 1000000);
	db.transaction(createTables, errorCB, successCB);
}


function createTables(tx) {
	tx.executeSql("CREATE TABLE IF NOT EXISTS Rezepte (RezeptID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Name TEXT NOT NULL, Bild TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Merkliste (RezeptID INTEGER NOT NULL)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zubereitungen (ZubereitungID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, RezeptID INTEGER NOT NULL, Details TEXT, Art TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zutaten (ZutatID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, RezeptID INTEGER NOT NULL, Name TEXT, Menge INTEGER, Mengeneinheit TEXT)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Zubereitungsbilder (BildID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,  Art TEXT NOT NULL, Bild TEXT)");
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
		tx.executeSql("UPDATE Rezepte SET Name = ?, Bild = ? WHERE RezeptID = ?", [name, bild, id], callback);
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

function readRezept(name, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT p.RezeptID, p.Name, p.Bild, FROM Rezepte p 
						LEFT JOIN Zutaten z ON z.RezeptID = p.RezeptID 
						LEFT JOIN Zubereitung x ON x.RezeptID = p.RezeptID 
						WHERE p.Name = ? 
						GROUP BY p.ID, p.Name", [name], callback);
	}, errorCB, successCB);
}


function getIDofRezept(name, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT p.RezeptID FROM Rezepte p 
						WHERE p.Name = ?", [name], callback);
	}, errorCB, successCB);
}

function deleteRezept(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Rezepte WHERE RezeptID = ?", [id], callback);
	});
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Zubereitungen WHERE RezeptID = ?", [id], callback);
	});
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Zutaten WHERE RezeptID = ?", [id], callback);
	});
}


function createZubereitung(rezeptID, details, art, callback) {
	db.transaction(function(tx) {
		tx.executeSql("INSERT INTO Zubereitungen (RezeptID, Details, Art) VALUES (?, ?,?)", [rezeptID, details, art] , callback);
	}, errorCB, successCB);
}


function updateZubereitung(details, art, zubereitungID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("UPDATE Zubereitungen SET Details = ?, Art = ? WHERE ZubereitungID = ?", [details, art, zubereitungID], callback);
	});
}

function deleteZubereitung(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Zubereitungen WHERE ZubereitungID = ?", [id], callback);
	});
}

function readZubereitungen(rezeptID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT * FROM Zubereitungen WHERE RezeptID = ? ORDER BY Name ASC", [rezeptID], callback);
	}, errorCB, successCB);
}



function createZutat(rezeptID, name, menge, mengeneinheit callback) {
	db.transaction(function(tx) {
		tx.executeSql("INSERT INTO Zutaten (RezeptID, Name, Menge, Mengeneinheit) VALUES (?, ?, ?, ?)", [rezeptID, name, menge, mengeneinheit] , callback);
	}, errorCB, successCB);
}


function updateZutat(name, menge, mengeneinheit, zutatID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("UPDATE Zutaten SET Name = ?, Menge = ?, Mengeneinheit = ? WHERE ZutatID = ?", [name, menge, mengeneinheit, zutatID], callback);
	});
}

function deleteZutat(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Zutaten WHERE ZutatID = ?", [id], callback);
	});
}

function readZutaten(rezeptID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT * FROM Zutaten WHERE RezeptID = ? ORDER BY Name ASC", [rezeptID], callback);
	}, errorCB, successCB);
}


function merkeRezept(rezeptID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("INSERT INTO Merkliste (RezeptID) VALUES (?)", [rezeptID] , callback);
	}, errorCB, successCB);
}

function deleteMarkierung(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Merkliste WHERE RezeptID = ?", [id], callback);
	});
}

function readMerkliste(callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT * FROM Merkliste ORDER BY Name ASC", [], callback);
	}, errorCB, successCB);
}


function createZubereitungsbild(art, bild callback) {
	db.transaction(function(tx) {
		tx.executeSql("INSERT INTO Zubereitungsbilder (Art, Bild) VALUES (?, ?, ?, ?)", [art, bild] , callback);
	}, errorCB, successCB);
}


function updateZubereitungsbild(art, bild, bildID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("UPDATE Zubereitungsbilder SET Art = ?, Bild = ? WHERE BildID = ?", [art, bild, bildID], callback);
	});
}

function deleteZubereitungsbild(id, callback) {
	db.transaction(function(tx) {
		tx.executeSql("DELETE FROM Zubereitungsbilder WHERE BildID = ?", [id], callback);
	});
}

function readZubereitungsbild(bildID, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT Bild FROM Zubereitungsbilder WHERE BildID = ?", [bildID], callback);
	}, errorCB, successCB);
}

function readZubereitungsbild(art, callback) {
	db.transaction(function(tx) {
		tx.executeSql("SELECT z.Bild FROM Zubereitungsbilder z WHERE Art = ? ", [art], callback);
	}, errorCB, successCB);
}



