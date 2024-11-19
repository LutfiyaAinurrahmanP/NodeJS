# Address API Spec

## Create Address API

Endpoint : POST api/contact/:contactId/addresses

Request Body :

```json
{
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos apa"
}
```

Response Body Success :

```json
{
    "data" : {
        "contactId" : 1,
        "street" : "jalan apa",
        "city" : "kota apa",
        "province" : "provinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos apa"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Ada kesalahan data"
}
```

## Update Address API

Endpoint : PUT api/contact/:contactId/addresses/:addressId

Request Body :

```json
{
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "provinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos apa"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa",
        "city" : "kota apa",
        "province" : "provinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos apa"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Ada kesalahan data"
}
```

## Get Address API

Endpoint : GET api/contact/:contactId/addresses/:addressId

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa",
        "city" : "kota apa",
        "province" : "provinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos apa"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Ada kesalahan data" 
}
```

## List Address API

Endpoint : GET api/contact/:contactId/addresses

Response Body Success :

```json
{
    "data" : [
        {
            "id" : 1,
            "street" : "jalan apa",
            "city" : "kota apa",
            "province" : "provinsi apa",
            "country" : "negara apa",
            "postal_code" : "kode pos apa"
        },
        {
            "id" : 1,
            "street" : "jalan apa",
            "city" : "kota apa",
            "province" : "provinsi apa",
            "country" : "negara apa",
            "postal_code" : "kode pos apa"
        }
    ]
}
```

Response Body Error :

```json
{
    "errors" : "Address dengan ID tersebut sudah tidak tersedia" 
}
```

## Remove Address API

Endpoint : DELETE api/contact/:contactId/addresses/:addressId

Response Body Success :

```json
{
    "data" : "Address berhasil dihapus"
}
```

Response Body Error :

```json
{
    "errors" : "Address dengan ID tersebut sudah tidak tersedia"
}
```
