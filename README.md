#### Ejercicio entregable
---

__Entregable__

Sigue los siguientes pasos:
1. clona el repositorio a tu directorio de trabajo local
```script
git clone https://github.com/bcncodes-training/mongo-ecommerce.git
```
2. haz el _checkout_ de la rama asignada:
```script
git checkout "pair"+numero

> git checkout pair3

```
3. genera los documentos demandados:
  - mongodump de la bd (documentos+datos+índices)

    C:\Program Files\MongoDB\Server\4.2\bin>mongodump --db=Tienda_Jimena --out=C:/CIFO-MS3/workspace/mongo-ecommerce/BBDD
    ó 1 solo archivo
    mongodump --db=Tienda_Jimena --archive=C:/CIFO-MS3/workspace/mongo-ecommerce/BBDD/tiendajimena


    2019-10-03T11:56:41.526+0200    writing Tienda_Jimena.productos to
    2019-10-03T11:56:41.561+0200    writing Tienda_Jimena.usuario to
    2019-10-03T11:56:41.561+0200    writing Tienda_Jimena.carrito to
    2019-10-03T11:56:41.562+0200    writing Tienda_Jimena.categorias to
    2019-10-03T11:56:41.567+0200    done dumping Tienda_Jimena.categorias (16 documents)
    2019-10-03T11:56:41.869+0200    done dumping Tienda_Jimena.usuario (100 documents)
    2019-10-03T11:56:41.869+0200    done dumping Tienda_Jimena.carrito (50 documents)
    2019-10-03T11:56:41.883+0200    done dumping Tienda_Jimena.productos (331 documents)

    /* Por Colección */
    mongorestore -d Tienda_Jimena -c usuario E:/mongo-ecommerce/BBDD/Tienda_Jimena/usuario.bson
    mongorestore -d Tienda_Jimena -c carrito E:/mongo-ecommerce/BBDD/Tienda_Jimena/carrito.bson
    mongorestore -d Tienda_Jimena -c productos E:/mongo-ecommerce/BBDD/Tienda_Jimena/productos.bson
    mongorestore -d Tienda_Jimena -c categorias E:/mongo-ecommerce/BBDD/Tienda_Jimena/categorias.bson

  /* Toda la BBDD */
    mongorestore --archive=C:/CIFO-MS3/workspace/mongo-ecommerce/BBDD/tiendajimena



  - queries.js con la información de las queries y los índices creados

  

4. sube los cambios:
```script
  git add .
  git commit -m 'msg'
  git push nombre_rama
 ```
__Ejercicio__

- Crear una bd para un ecommerce que contenga las siguientes colecciones:
  - USER
  - PRODUCT
  - CATEGORY
  - CART


  BBDD: Tienda_Jimena
  Colecciones: productos (331 documents)
              carrito (50 documents)
              categorias (16 documents)
              usuario (100 documents)




- Generar consultas sobre las colecciones anteriores para llevar a cabo las siguientes operaciones:
  
  -  Generar algunas consultas sobre productos, que puedan ser requeridas por los usuarios (Buscar por tipo de producto, talla, tamaño, precios, recomendados, ofertas, últimas adquisiciones, etc…)

    
  -  Realizar un mantenimiento de la jerarquía de categorías añadiendo una nueva categoría y modificando una categoría. Realizar también las consultas para obtener el hilo de Ariadna de un producto determinado

Insertar categoria en productos


db.productos.update({criterio = id_categoria},{new_key:value},{upsert - actualizar, evitar duplicados}, {multi: true - todos})




  -  Gestionar el carrito: Añadir un producto al carrito, eliminar un producto del carrito, abandono del carrito sin comprar, pagar.

  * Si usuario invitado genera un carrito, al crear este, tendrá como id_usuario = idSession, hasta que se confirme como cliente y pasamos a actualizar el id_usuario(carrito) = id_usuario(usuario).


  /*  Añadir producto al carrito */
  /* No Existe carrito del usuario --> crear carrito para usuario */



