# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
    "username" : "lutfiya",
    "password" : "rahasia",
    "name" : "Lutfiya Ainurrahman Prasetyo"
}
```

Response Body Success :

```json
{
    "data" : {
        "username" : "lutfiya",
        "name" : "Lutfiya Ainurrahman Prasetyo"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username" : "lutfiya",
    "password" : "rahasia"
}
```

Response Body Success :

```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username or Password wrong"
}
```

## Update User API

Endpoint :  PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
    "name" : "Lutfiya Ainurrahman Prasetyo",
    "password" : "rahasia"
}
```

Response Body Success :

```json
{
    "data" : {
        "username" : "lutfiya",
        "name" : "Lutfiya Ainurrahman Prasetyo"
    }
}
```

Response Body Error :

```json
{
    "errors" : "name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body :

```json
{
    "data" : {
        "username" : "lutfiya",
        "name" : "Lutfiya Ainurrahman Prasetyo"
    }
}
```

Response Body Error :

```json
{
   "errors" : "Unauthorized" 
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
    "data" : "Logout Success"
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```
