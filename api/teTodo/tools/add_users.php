<?php

$dbFile = 'db.sqlite';

try {
    $db = new PDO('sqlite:' . $dbFile);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )";

    $db->exec($sql);
    echo "A 'users' tábla sikeresen létrejött.\n";
    
} catch (PDOException $e) {
    echo "Hiba a 'users' tábla létrehozása során: " . $e->getMessage();
}

$db = null;
?>