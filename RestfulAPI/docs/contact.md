# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Header :

- Authorization : token

Request Body :

```json
{
    "first_name" : "Lutfiya",
    "last_name" : "Ainurrahman",
    "email" : "lutfiyapr.creative@gmail.com",
    "phone" : "081915133813"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Lutfiya",
        "last_name" : "Ainurrahman",
        "email" : "lutfiyapr.creative@gmail.com",
        "phone" : "081915133813"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Header :

- Authorization : token

Request Body :

```json
{
    "first_name" : "Lutfiya",
    "last_name" : "Ainurrahman",
    "email" : "lutfiyapr.creative@gmail.com",
    "phone" : "081915133813"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Lutfiya",
        "last_name" : "Ainurrahman",
        "email" : "lutfiyapr.creative@gmail.com",
        "phone" : "081915133813"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Header :

- Authorization : token

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Lutfiya",
        "last_name" : "Ainurrahman",
        "email" : "lutfiyapr.creative@gmail.com",
        "phone" : "081915133813"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts/:id

Header :

- Authorization : token

Query params :

- name : Search by first_name or last_name using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Lutfiya",
            "last_name" : "Ainurrahman",
            "email" : "lutfiyapr.creative@gmail.com",
            "phone" : "081915133813"
        },
        {
            "id" : 2,
            "first_name" : "Lutfiya",
            "last_name" : "Ainurrahman",
            "email" : "lutfiyapr.creative@gmail.com",
            "phone" : "081915133813"
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Header :

- Authorization : token

Response Body Success :

```json
{
    "data" : "Contact successfully removed"
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```
