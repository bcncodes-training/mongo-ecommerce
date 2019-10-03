- queries.js con la información de las queries y los índices creados

  /*> db.carrito.find().forEach()

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
 )*/


 - Generar consultas sobre las colecciones anteriores para llevar a cabo las siguientes operaciones:
  
  -  Generar algunas consultas sobre productos, que puedan ser requeridas por los usuarios (Buscar por tipo de producto, talla, tamaño, precios, recomendados, ofertas, últimas adquisiciones, etc…)

    /* Consultas de producto */
    
    // Productos con oferta

      db.productos.find({oferta:true}).pretty()

      /* Cuantos productos en oferta */
      db.productos.find({oferta:true}).count()
      //168

    //Listar datos de un producto:
    //  Id_producto, nombre_producto, categoria_producto, precio_unitario, cantidad_disponible, oferta(S/N)

      db.productos.findOne()

      db.productos.find({},{_id:0, SKU:"SKU",nombre:"nombre",id_categoria:"id_categoria",precio:"precio",cantidad:"cantidad"})
      //Resultado:
            { "SKU" : 1, "nombre" : "PC AX 4842", "id_categoria" : [ 1, 3 ], "precio" : "1323.41", "cantidad" : 71 }
            { "SKU" : 3, "nombre" : "PC GTX 449", "id_categoria" : [ 1, 3 ], "precio" : "1714.6", "cantidad" : 416 }
            { "SKU" : 5, "nombre" : "PC AX 4145", "id_categoria" : [ 1, 1 ], "precio" : "1587.89", "cantidad" : 190 }
            { "SKU" : 0, "nombre" : "PC ATX 2871", "id_categoria" : [ 1, 3 ], "precio" : "2997.63", "cantidad" : 428 }
            { "SKU" : 4, "nombre" : "PC GTX 105", "id_categoria" : [ 1, 1 ], "precio" : "2544.42", "cantidad" : 131 }
            { "SKU" : 6, "nombre" : "PC GTX 4039", "id_categoria" : [ 1, 2 ], "precio" : "2238.99", "cantidad" : 367 }
            { "SKU" : 8, "nombre" : "PC GMD 1857", "id_categoria" : [ 1, 1 ], "precio" : "2424.31", "cantidad" : 373 }
            { "SKU" : 2, "nombre" : "PC AX 673", "id_categoria" : [ 1, 1 ], "precio" : "928.26", "cantidad" : 194 }
            { "SKU" : 11, "nombre" : "PC ATX 432", "id_categoria" : [ 1, 1 ], "precio" : "2432.25", "cantidad" : 255 }
            { "SKU" : 10, "nombre" : "PC GTX 2721", "id_categoria" : [ 1, 1 ], "precio" : "1260.65", "cantidad" : 13 }
            { "SKU" : 9, "nombre" : "PC GMD 3652", "id_categoria" : [ 1, 1 ], "precio" : "2860.19", "cantidad" : 458 }
            { "SKU" : 7, "nombre" : "PC AX 2365", "id_categoria" : [ 1, 3 ], "precio" : "2645.63", "cantidad" : 325 }
            { "SKU" : 15, "nombre" : "PC GMD 3551", "id_categoria" : [ 1, 3 ], "precio" : "2807.03", "cantidad" : 237 }
            { "SKU" : 14, "nombre" : "PC GTX 726", "id_categoria" : [ 1, 3 ], "precio" : "1888.32", "cantidad" : 96 }
            { "SKU" : 12, "nombre" : "PC ATX 4818", "id_categoria" : [ 1, 2 ], "precio" : "1704.98", "cantidad" : 158 }
            { "SKU" : 16, "nombre" : "PC GTX 3503", "id_categoria" : [ 1, 1 ], "precio" : "1701.26", "cantidad" : 55 }
            { "SKU" : 17, "nombre" : "PC ATX 4507", "id_categoria" : [ 1, 3 ], "precio" : "2845.69", "cantidad" : 404 }
            { "SKU" : 18, "nombre" : "PC GMD 4723", "id_categoria" : [ 1, 1 ], "precio" : "2024.11", "cantidad" : 124 }
            { "SKU" : 13, "nombre" : "PC AX 1917", "id_categoria" : [ 1, 3 ], "precio" : "1857.59", "cantidad" : 141 }
            { "SKU" : 19, "nombre" : "PC ATX 940", "id_categoria" : [ 1, 1 ], "precio" : "1657.75", "cantidad" : 485 }


    //Listar productos x categoria
    // Listar categorias de producto (arbol de categorias)
    
    > db.categorias.find({},{_id:0,nombre:"nombre",id_categoria:"id_categoria"})

    //Resultado:
            { "id_categoria" : [ 1 ], "nombre" : "Ordenadores" }
            { "id_categoria" : [ 1, 1 ], "nombre" : "Sobremesa" }
            { "id_categoria" : [ 1, 2 ], "nombre" : "Portatiles" }
            { "id_categoria" : [ 1, 3 ], "nombre" : "Servidores" }
            { "id_categoria" : [ 2 ], "nombre" : "Tablets" }
            { "id_categoria" : [ 2, 1 ], "nombre" : "Android" }
            { "id_categoria" : [ 2, 2 ], "nombre" : "IOS" }
            { "id_categoria" : [ 3 ], "nombre" : "Perifericos" }
            { "id_categoria" : [ 3, 1 ], "nombre" : "Monitores" }
            { "id_categoria" : [ 3, 2 ], "nombre" : "Teclados" }
            { "id_categoria" : [ 3, 3 ], "nombre" : "Ratones" }
            { "id_categoria" : [ 4 ], "nombre" : "Libros" }
            { "id_categoria" : [ 4, 1 ], "nombre" : "Programacion" }
            { "id_categoria" : [ 4, 2 ], "nombre" : "BBDDs" }
            { "id_categoria" : [ 4, 3 ], "nombre" : "Gestion de Proyectos" }
            { "id_categoria" : [ 4, 4 ], "nombre" : "Sistemas operativos" }

    //



  /*    Falla
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
*/

db.productos.aggregate( 
        [             
            {$lookup:{  from:'categorias',
                        localField:'id_categoria',
                        foreignField: 'id_categoria',
                        as: 'susCategorias' }             
                    },                 
                    {$unwind: '$susCategorias'},             
                    {$project:{ _id: 0, SKU: "$SKU", articulo: "$nombre",categoria: "$susCategorias.id_categoria" }
                         }         
                    ]       
                    )

  -  Realizar un mantenimiento de la jerarquía de categorías añadiendo una nueva categoría y modificando una categoría. Realizar también las consultas para obtener el hilo de Ariadna de un producto determinado
  -  Gestionar el carrito: Añadir un producto al carrito, eliminar un producto del carrito, abandono del carrito sin comprar, pagar.


  /*  Añadir producto al carrito */
  /* No Existe carrito del usuario --> crear carrito para usuario */