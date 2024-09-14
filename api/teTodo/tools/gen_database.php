<?php

$dbFile = 'db.sqlite';

try {
    $db = new PDO('sqlite:' . $dbFile);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task TEXT NOT NULL,
                complete BOOLEAN NOT NULL DEFAULT 0,
                visible BOOLEAN NOT NULL DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )";
    
    $db->exec($sql);
    echo "A 'todos' tábla sikeresen létrejött.";
    
} catch (PDOException $e) {
    echo "Hiba az adatbázis létrehozása során: " . $e->getMessage();
}

$db = null;
?>

