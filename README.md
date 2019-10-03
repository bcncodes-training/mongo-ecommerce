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

    2019-10-03T11:56:41.526+0200    writing Tienda_Jimena.productos to
    2019-10-03T11:56:41.561+0200    writing Tienda_Jimena.usuario to
    2019-10-03T11:56:41.561+0200    writing Tienda_Jimena.carrito to
    2019-10-03T11:56:41.562+0200    writing Tienda_Jimena.categorias to
    2019-10-03T11:56:41.567+0200    done dumping Tienda_Jimena.categorias (16 documents)
    2019-10-03T11:56:41.869+0200    done dumping Tienda_Jimena.usuario (100 documents)
    2019-10-03T11:56:41.869+0200    done dumping Tienda_Jimena.carrito (50 documents)
    2019-10-03T11:56:41.883+0200    done dumping Tienda_Jimena.productos (331 documents)

  - queries.js con la información de las queries y los índices creados

  > db.carrito.find().forEach()

  > db.carrito.aggregate(
    [
      {$group: 
        { totalprod: $prods.qty },
        { $sum }
      }

    ]
  )

  db.carrito.update({"totalqty" :"Constantinopla" },
    { $inc: { quantity: +5, "leidos": 1 } }
 )


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

    /* Consultas de producto */
    
      Productos con oferta
      Listar datos de un producto:
      Id_producto, nombre_producto, categoria_producto, precio_unitario, cantidad_disponible, oferta(S/N)

      db.productos.findOne()


    Listar productos x categoria


      db.productos.aggregate(
          [
            {$lookup:{  from:'categorias',
                        localField:'id_categoria.[0].nombre',
                        foreignField: 'id_categoria.[0]',
                        as: 'susCategorias' }
            },
            {$sort:{SKU:1}}
            {$project:{
              _id: 0, 
              SKU: "$SKU",
              articulo: "$nombre",
              categoria: "$susCategorias.id_categoria"
             }
            }
        ]
      ) 


    > db.productos.aggregate(
...           [
...             {$lookup:{  from:'categorias',
...                         localField:'id_categoria',
...                         foreignField: 'id_categoria',
...                         as: 'susCategorias' }
...             },
                {$unwind: '$susCategorias'},
...             {$project:{
...               _id: 0,
...               SKU: "$SKU",
...               articulo: "$nombre",
...               categoria: "$susCategorias.id_categoria"
...             }
...             }
...
...           ]
...       )
{ "SKU" : 1, "articulo" : "PC AX 4842" }
{ "SKU" : 3, "articulo" : "PC GTX 449" }
{ "SKU" : 5, "articulo" : "PC AX 4145" }
{ "SKU" : 0, "articulo" : "PC ATX 2871" }
{ "SKU" : 4, "articulo" : "PC GTX 105" }
{ "SKU" : 6, "articulo" : "PC GTX 4039" }
{ "SKU" : 8, "articulo" : "PC GMD 1857" }
{ "SKU" : 2, "articulo" : "PC AX 673" }
{ "SKU" : 11, "articulo" : "PC ATX 432" }
{ "SKU" : 10, "articulo" : "PC GTX 2721" }
{ "SKU" : 9, "articulo" : "PC GMD 3652" }
{ "SKU" : 7, "articulo" : "PC AX 2365" }
{ "SKU" : 15, "articulo" : "PC GMD 3551" }
{ "SKU" : 14, "articulo" : "PC GTX 726" }
{ "SKU" : 12, "articulo" : "PC ATX 4818" }
{ "SKU" : 16, "articulo" : "PC GTX 3503" }
{ "SKU" : 17, "articulo" : "PC ATX 4507" }
{ "SKU" : 18, "articulo" : "PC GMD 4723" }
{ "SKU" : 13, "articulo" : "PC AX 1917" }
{ "SKU" : 19, "articulo" : "PC ATX 940" }

  -  Realizar un mantenimiento de la jerarquía de categorías añadiendo una nueva categoría y modificando una categoría. Realizar también las consultas para obtener el hilo de Ariadna de un producto determinado
  -  Gestionar el carrito: Añadir un producto al carrito, eliminar un producto del carrito, abandono del carrito sin comprar, pagar.


  /*  Añadir producto al carrito */
  /* No Existe carrito del usuario --> crear carrito para usuario */



