# Felhasználói dokumentáció

## Útvonalak

| Végpont | Metódus | Auth | CRUD |
|-|-|-|
| /api/login | POST | ✗ | read |
| /api/register | POST | ✗ | create |
| /api/todos | GET | ✔ | read |
| /api/todos | POST | ✔ | create |
| /api/todos/{id} | PUT | ✔ | update |
| /api/todos/{id} | DELETE | ✔ | delete |
| /api/todos/{id}/complete | PATCH | ✔ | update |
| /api/todos/{id}/visible | PATCH | ✔ | update |
