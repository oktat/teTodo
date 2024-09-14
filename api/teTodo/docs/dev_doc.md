# Fejelsztői dokumentáció

## Használt eszköz

A REST API Leaf PHP-val lett lett létrehozva, minimális fejlesztéssel.

## Könyvtárak

* A kontrollerek az app/controllers könyvtárban vannak.
* A middleware modulok az app/middlewares könyvtárban vannak.
* Az útválasztás az app/routes könyvtárban van.

## Kontrollerek

### AuthController

Helye:

* `app/controllers/AuthController.php`

Az Auth kontroller két függvényt tartalmaz:

* login()
* register()

### TodoController

Helye:

* `app/controllers/TodoController.php`

A TodoController 6 függvényt tartalmaz:

* index()
* create()
* update()
* delete()
* complete()
* visible()

## Middleware

Jelenleg egyetlen middleware van: Auth.php.

A middleware-t auth néven van regisztrálva, amit az útválasztás használ.

## Útválasztás

Az útválasztás az app/routes/api.php fájlban van.
