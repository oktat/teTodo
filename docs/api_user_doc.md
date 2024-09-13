# API dokumentáció

## Azonosítás

| Végpont | Metódus | Auth | CRUD |
|-|-|-|-|
| /api/auth/register | POST | nem | create |
| /api/auth/login | POST | nem | read |
| /api/auth/logout | POST | igen | read |
| /api/auth/profile | GET | igen | read |

## TODO lista

| Végpont | Metódus | Auth | CRUD |
|-|-|-|-|
| /api/todos | GET | igen | read |
| /api/todos/{id} | GET | igen | read |
| /api/todos | POST | igen | create |
| /api/todos/{id} | PUT | igen | update |
| /api/todos/{id} | DELETE | igen | delete |

## Teljesítés

| Végpont | Metódus | Auth | CRUD |
|-|-|-|-|
| /api/todos/{id}/complete | PATCH | igen | update |
| /api/todos/search | GET | igen | read |
