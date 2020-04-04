# another_me

### superuser
http://77.244.65.15:3527/admin/  
Логин: admin  
Пароль: 2017AV20Com  

## Начало
Основной url, все запросы идут через него + продолжение
  
http://77.244.65.15:3527/api/v1/data/


## Регистрация
POST
  
http://77.244.65.15:3527/api/v1/data/auth/users/
form-data:
```json
username: Vlad
password: vladxqwe1
email: vlad@yandex.com
bio: example bio
location: moscow
```

RESPONSE:
```python
{
    "email": "vlad@yandex.com",
    "username": "Vlad",
    "id": 2
}
```
***

## Аутентификация
POST
  
http://77.244.65.15:3527/api/v1/data/auth/jwt/create/
form-data:
```json
username: Vlad
password: vladxqwe1
```
REPSONSE:
```python
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NDEzMDMxMiwianRpIjoiOTkzODhiOWFiMmEyNGZmZDljNGMwY2FiYWUyZTk1OWYiLCJ1c2VyX2lkIjoyfQ.f4q6YNGPhfu6DZoFX_2hy7FuSSNh9R3qyBtxNMRKadY",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0MDQ3MjEyLCJqdGkiOiI3MGUzNzZmNzQ1MTQ0NmVlOGM1NDg2Mjc3Zjg2OTVmNyIsInVzZXJfaWQiOjJ9.c_1fLiR7SD9oPqxZSDxh72W9RuBmI_XM5GBI8B_3TqM"
}
```
***

## Создание записи
POST
  
http://77.244.65.15:3527/api/v1/data/promise/new/ + headers (Auth: + access token)
form-data:
```json
name: vlads promise
description: example desc
deadline: 10
```
REPSONSE:
```python
{
    "id": 1,
    "owner": "Vlad",
    "name": "vlads promise",
    "slug": "Vlad-731fd3b5",
    "description": "example desc",
    "deadline": "10",
    "is_approved": false,
    "modify_time": "12.03.2020 23:15:16",
    "create_time": "12.03.2020 23:15:16"
}
```
***

## Список записей
GET
  
http://77.244.65.15:3527/api/v1/data/promise/
  
Параметры (Записи отсортированны по дате создания (свежие вверху)):
1. ?page=1 пагинация, записей на 1 странице = 10
2. ?search=test поиск по полю name (неполное совпадение)
3. ?owner=Vlad условие для поиска по "владельцу" записи

REPSONSE:
```python
{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "owner": "Vlad",
            "name": "test for search",
            "slug": "Vlad-8019fe05",
            "description": "tested",
            "deadline": "400",
            "is_approved": false,
            "modify_time": "12.03.2020 23:17:40",
            "create_time": "12.03.2020 23:17:40"
        },
        {
            "id": 1,
            "owner": "Vlad",
            "name": "vlads promise",
            "slug": "Vlad-731fd3b5",
            "description": "example desc",
            "deadline": "10",
            "is_approved": false,
            "modify_time": "12.03.2020 23:15:16",
            "create_time": "12.03.2020 23:15:16"
        }
    ]
}
```
***
## Детальная информация
GET
  
http://77.244.65.15:3527/api/v1/data/promise/Vlad-731fd3b5/
  
Дополнительно: name/Vlad-731fd3b5/ (по полю slug)
RESPONSE:
```python
{
    "id": 1,
    "owner": "Vlad",
    "name": "vlads promise",
    "slug": "Vlad-731fd3b5",
    "description": "example desc",
    "deadline": "10",
    "is_approved": false,
    "modify_time": "12.03.2020 23:15:16",
    "create_time": "12.03.2020 23:15:16"
}
```

PUT
  
http://77.244.65.15:3527/api/v1/data/promise/Vlad-731fd3b5/
  
Дополнительно: name/Vlad-731fd3b5/ (по полю slug)
form-data:
```json
name: newname
description: ?????
deadline: 10000
```
RESPONSE:
```python
{
    "id": 1,
    "owner": "Vlad",
    "name": "newname",
    "slug": "Vlad-c4509cf3",
    "description": "????",
    "deadline": "10000",
    "is_approved": false,
    "modify_time": "12.03.2020 23:28:34",
    "create_time": "12.03.2020 23:15:16"
}
```

