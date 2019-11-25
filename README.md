# Pharol REST API

## Obtener todos los registros de personas

**URL:** `/people`

**Método:** `GET`

Obtiene todos los registros en la base de datos en formato JSON.

## Crear Registro de Persona

**URL:** `/people/create`

**Método:** `POST`

Crea un Registro de persona en la base de datos, pasando un JSON del siguiente estilo:

```javascript
{
  "rut":"12345678-9",
  "nombre":"Juan",
  "apellido":"Perez",
  "email":"juan@mail.com",
  "telefono":"+56123456789",
  "sexo":"Masculino",
  "direcciones":[
    "direccion1",
    "direccion2",
    "direccion3"
  ]
}
```

## Obtener registro de persona

**URL:** `/people/{id}`

**Método:** `GET`

Obtiene un registro de persona pasando el id como parametro en la url.

## Actualizar Registro de persona

**URL:** `/people/{id}`

**Método:** `PUT`

Actualiza un registro de persona pasando un ID en la url y un JSON del siguiente estilo:

```javascript
{
  "rut":"12345678-9",
  "nombre":"Juan",
  "apellido":"Perez",
  "email":"juan@mail.com",
  "telefono":"+56123456789",
  "sexo":"Masculino",
  "direcciones":[
    "direccion1",
    "direccion2",
    "direccion3"
  ]
}
```

## Eliminar registro de persona

**URL:** `/people/{id}`

**Método:** `DELETE`

Elimina un registro de persona pasando un ID en la url.

## Consultas

### Obtener registro por medio del RUT

**URL:** `/people/rut/{rut}`

**Método:** `GET`

Obtiene el registro de persona perteneciente al numero de rut utilizado.

### Obtener registros por medio del nombre

**URL:** `/people/nombre/{nombre}`

**Método:** `GET`

Obtiene todos los registros que contengan el nombre utilizado.

### Obtener registros por medio del apellido

**URL:** `/people/apellido/{apellido}`

**Método:** `GET`

Obtiene todos los registros que contengan el apellido utilizado.

### Obtener registro por medio del email

**URL:** `/people/email/{email}`

**Método:** `GET`

Obtiene el registro que contiene el email utilizado.

### Obtener registros por medio del telefono

**URL:** `people/telefono/{telefono}`

**Método:** `GET`

Obtiene todos los registros que contengan el numero de telefono utilizado.

### Obtener registros por medio del sexo

**URL:** `/people/sexo/{sexo}`

**Método:** `GET`

Obtiene todos los registros del sexo especificado.
