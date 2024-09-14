# teTodo

Tesztelésre szánt TODO API-ja.

## Backend függőségek telepítése

Lépjünk be a bacend könyvtárába, majd telepítsük a függőségeket.

```bash
cd api/teTodo
composer install
```

## Adatbázis letrehozása

Hozzunk létre egy db.sqlite fájlt a gyökérkönyvtárban.

```bash
touch db.sqlite
```

A touch parancs létrehoz egy üres fájlt. A fál bármivel létrehozható, ha az adott gépen nincs ilyen parancs.

## A táblák létrehozása

```bash
cd api/teTodo
php tools/gen_database.php
php tools/add_users.php
```

## Indítás

```bash
php -S localhost:8000 -t .
```
