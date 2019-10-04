- queries.js con la información de las queries y los índices creados

	

 - Generar consultas sobre las colecciones anteriores para llevar a cabo las siguientes operaciones:
  
  -  Generar algunas consultas sobre productos, que puedan ser requeridas por los usuarios (Buscar por tipo de producto, talla, tamaño, precios, recomendados, ofertas, últimas adquisiciones, etc…)

    /* Consultas de producto */
    
    // Productos con oferta

      db.productos.find({oferta:true}).pretty()
	  
//Medicion previa SIN Indeces Productos:
	  
	  > db.productos.find({oferta:true}).explain("executionStats")
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.productos",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "oferta" : {
                                "$eq" : true
                        }
                },
                "queryHash" : "08E0E71A",
                "planCacheKey" : "08E0E71A",
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "oferta" : {
                                        "$eq" : true
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 168,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 331,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "oferta" : {
                                        "$eq" : true
                                }
                        },
                        "nReturned" : 168,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 333,
                        "advanced" : 168,
                        "needTime" : 164,
                        "needYield" : 0,
                        "saveState" : 2,
                        "restoreState" : 2,
                        "isEOF" : 1,
                        "direction" : "forward",
                        "docsExamined" : 331
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}

	> db.productos.createIndex({"SKU":1,"oferta":1});
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
	//Con Index
	> db.productos.find({oferta:true}).explain("executionStats")
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.productos",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "oferta" : {
                                "$eq" : true
                        }
                },
                "queryHash" : "08E0E71A",
                "planCacheKey" : "A2610016",
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "oferta" : {
                                        "$eq" : true
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 168,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 331,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "oferta" : {
                                        "$eq" : true
                                }
                        },
                        "nReturned" : 168,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 333,
                        "advanced" : 168,
                        "needTime" : 164,
                        "needYield" : 0,
                        "saveState" : 2,
                        "restoreState" : 2,
                        "isEOF" : 1,
                        "direction" : "forward",
                        "docsExamined" : 331
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}

	> db.productos.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "Tienda_Jimena.productos"
        },
        {
                "v" : 2,
                "key" : {
                        "SKU" : 1,
                        "oferta" : 1
                },
                "name" : "SKU_1_oferta_1",
                "ns" : "Tienda_Jimena.productos"
        }
]

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


	//Medicion sin Indices
	> db.productos.find({},{_id:0, SKU:"SKU",nombre:"nombre",id_categoria:"id_categoria",precio:"precio",cantidad:"cantidad"}).explain("executionStats")
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.productos",
                "indexFilterSet" : false,
                "parsedQuery" : {

                },
                "queryHash" : "1E11F942",
                "planCacheKey" : "1E11F942",
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "_id" : 0,
                                "SKU" : "SKU",
                                "nombre" : "nombre",
                                "id_categoria" : "id_categoria",
                                "precio" : "precio",
                                "cantidad" : "cantidad"
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "direction" : "forward"
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 331,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 331,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 331,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 333,
                        "advanced" : 331,
                        "needTime" : 1,
                        "needYield" : 0,
                        "saveState" : 2,
                        "restoreState" : 2,
                        "isEOF" : 1,
                        "transformBy" : {
                                "_id" : 0,
                                "SKU" : "SKU",
                                "nombre" : "nombre",
                                "id_categoria" : "id_categoria",
                                "precio" : "precio",
                                "cantidad" : "cantidad"
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "nReturned" : 331,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 333,
                                "advanced" : 331,
                                "needTime" : 1,
                                "needYield" : 0,
                                "saveState" : 2,
                                "restoreState" : 2,
                                "isEOF" : 1,
                                "direction" : "forward",
                                "docsExamined" : 331
                        }
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}

	//Medicion con Indices
	
> db.productos.createIndex({"SKU":1,"id_categoria":1});
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "ok" : 1
}
> db.productos.find({},{_id:0, SKU:"SKU",nombre:"nombre",id_categoria:"id_categoria",precio:"precio",cantidad:"cantidad"}).explain("executionStats")
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.productos",
                "indexFilterSet" : false,
                "parsedQuery" : {

                },
                "queryHash" : "1E11F942",
                "planCacheKey" : "1E11F942",
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "_id" : 0,
                                "SKU" : "SKU",
                                "nombre" : "nombre",
                                "id_categoria" : "id_categoria",
                                "precio" : "precio",
                                "cantidad" : "cantidad"
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "direction" : "forward"
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 331,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 331,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 331,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 333,
                        "advanced" : 331,
                        "needTime" : 1,
                        "needYield" : 0,
                        "saveState" : 2,
                        "restoreState" : 2,
                        "isEOF" : 1,
                        "transformBy" : {
                                "_id" : 0,
                                "SKU" : "SKU",
                                "nombre" : "nombre",
                                "id_categoria" : "id_categoria",
                                "precio" : "precio",
                                "cantidad" : "cantidad"
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "nReturned" : 331,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 333,
                                "advanced" : 331,
                                "needTime" : 1,
                                "needYield" : 0,
                                "saveState" : 2,
                                "restoreState" : 2,
                                "isEOF" : 1,
                                "direction" : "forward",
                                "docsExamined" : 331
                        }
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}
	

    //Listar productos x categoria
    // Listar categorias de producto (arbol de categorias)
    
    > db.categorias.find({},{_id:0,nombre:"nombre",id_categoria:"id_categoria"})
	
	> db.categorias.createIndex({"id_categoria":1,"nombre":1});
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}

	> db.categorias.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "Tienda_Jimena.categorias"
        },
        {
                "v" : 2,
                "key" : {
                        "id_categoria" : 1,
                        "nombre" : 1
                },
                "name" : "id_categoria_1_nombre_1",
                "ns" : "Tienda_Jimena.categorias"
        }
]

	//Evaluar el indeces Categorias
	> db.categorias.find({},{_id:0,nombre:"nombre",id_categoria:"id_categoria"}).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.categorias",
                "indexFilterSet" : false,
                "parsedQuery" : {

                },
                "queryHash" : "A5118C73",
                "planCacheKey" : "A5118C73",
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "_id" : 0,
                                "nombre" : "nombre",
                                "id_categoria" : "id_categoria"
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "direction" : "forward"
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}

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

	//Ordenadores (general) - aleatoriamente Sobremesa - Portatiles - Servidores
	> db.productos.find({"id_categoria.0":1}).count()
	81

    //  Productos de la categoria Sobremesa
    db.productos.find({$and: [{"id_categoria.0":1},{"id_categoria.1":1}]}).pretty()
    db.productos.find({$and: [{"id_categoria.0":1},{"id_categoria.1":1}]}).count()
	32
  
  //Portatiles
    db.productos.find({$and: [{"id_categoria.0":1},{"id_categoria.1":2}]}).count()
    22
	
	> db.productos.find({$and: [{"id_categoria.0":1},{"id_categoria.1":3}]}).count()
	27


	//Tablets
	> db.productos.find({$and: [{"id_categoria.0":2}]}).pretty()
	> db.productos.find({$and: [{"id_categoria.0":2}]}).count()
	20
	
	//Tablets Android
	> db.productos.find({$and: [{"id_categoria.0":2},{"id_categoria.1":1}]}).count()
	11
	
	//Tablets IOS
	> db.productos.find({$and: [{"id_categoria.0":2},{"id_categoria.1":2}]}).count()
	9
	
	//Perifericos
	 { "id_categoria" : [ 3 ], "nombre" : "Perifericos" }
            { "id_categoria" : [ 3, 1 ], "nombre" : "Monitores" }
            { "id_categoria" : [ 3, 2 ], "nombre" : "Teclados" }
				{ "id_categoria" : [ 3, 3 ], "nombre" : "Ratones" }
				
	> db.productos.find({"id_categoria.0":3}).count()
	150	
	
		//Monitores
		> db.productos.find({$and: [{"id_categoria.0":3},{"id_categoria.1":1}]}).count()
		50
		
		//Teclados
		> db.productos.find({$and: [{"id_categoria.0":3},{"id_categoria.1":2}]}).count()
		50
		
		//Ratones
		> db.productos.find({$and: [{"id_categoria.0":3},{"id_categoria.1":3}]}).count()
		50
	
	//Libros
	> db.productos.find({"id_categoria.0":4}).count()
	80
	/*Libros" }
            { "id_categoria" : [ 4, 1 ], "nombre" : "Programacion" }
            { "id_categoria" : [ 4, 2 ], "nombre" : "BBDDs" }
            { "id_categoria" : [ 4, 3 ], "nombre" : "Gestion de Proyectos" }
            { "id_categoria" : [ 4, 4 ], "nombre" : "Sistemas operativos" }
	*/
	//Libros de Programacion
	> db.productos.find({$and: [{"id_categoria.0":4},{"id_categoria.1":1}]}).count()
	20
	
	//Libros de BBDDs
	> db.productos.find({$and: [{"id_categoria.0":4},{"id_categoria.1":2}]}).count()
	20
	
	//Libros de Gestion de Proyectos
	> db.productos.find({$and: [{"id_categoria.0":4},{"id_categoria.1":3}]}).count()
	20
	
	//Libros de Sistemas operativos
	> db.productos.find({$and: [{"id_categoria.0":4},{"id_categoria.1":4}]}).count()
	20
	
/* Indices para la busqueda por categorias y propiedades */

	//FALLA - Al no poder indexar dos campos de Arrays --> Nos ha hecho ver que es mejor partir de una bbbdd con más campos - clave: valor directo - Sin Arrays!
	> db.productos.createIndex({"SKU":1,"id_categoria":1,"propiedades":1});
{
        "ok" : 0,
        "errmsg" : "cannot index parallel arrays [propiedades] [id_categoria]",
        "code" : 171,
        "codeName" : "CannotIndexParallelArrays"
}

	//SOLUCION: Prescindir de uno de los indices, de categorias.
	
> db.productos.createIndex({"SKU":1,"propiedades":1});
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 3,
        "numIndexesAfter" : 4,
        "ok" : 1
}


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
                        localField:'id_categoria.0',
                        foreignField: 'id_categoria.0',
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

  /* CONSULTAS DE USUARIOS */

  /* Listar usuarios con su número de tel ordenados alfabéticamente - FUNCIONA!! */

  db.usuario.aggregate(
    [
      {$sort: {"nombre.last":1}},
      
      {$limit: 15},
      
      {$project: {_id:0, id_user:'$id_user', nombre:'$nombre', 
                  tel: '$telefono'} 
      }
    ]
  )
  
  
	//Resultado limitado en 15 
	{ "id_user" : 97, "nombre" : { "first" : "Judy", "last" : "Alexander" }, "tel" : "(836) 523-3114" }
	{ "id_user" : 69, "nombre" : { "first" : "Carol", "last" : "Ayala" }, "tel" : "(931) 418-3433" }
	{ "id_user" : 52, "nombre" : { "first" : "Brandy", "last" : "Baird" }, "tel" : "(831) 581-2323" }
	{ "id_user" : 76, "nombre" : { "first" : "Collier", "last" : "Baker" }, "tel" : "(982) 432-3661" }
	{ "id_user" : 71, "nombre" : { "first" : "Augusta", "last" : "Benson" }, "tel" : "(976) 573-2343" }
	{ "id_user" : 5, "nombre" : { "first" : "Tyler", "last" : "Bernard" }, "tel" : "(830) 566-2659" }
	{ "id_user" : 10, "nombre" : { "first" : "Melva", "last" : "Blanchard" }, "tel" : "(824) 465-3314" }
	{ "id_user" : 13, "nombre" : { "first" : "Adams", "last" : "Blevins" }, "tel" : "(816) 426-2314" }
	{ "id_user" : 61, "nombre" : { "first" : "Clarice", "last" : "Bowen" }, "tel" : "(851) 404-2512" }
	{ "id_user" : 50, "nombre" : { "first" : "Callie", "last" : "Burt" }, "tel" : "(973) 486-3054" }
	{ "id_user" : 26, "nombre" : { "first" : "Gina", "last" : "Calderon" }, "tel" : "(983) 415-2466" }
	{ "id_user" : 90, "nombre" : { "first" : "Jones", "last" : "Chambers" }, "tel" : "(858) 502-2982" }
	{ "id_user" : 28, "nombre" : { "first" : "Robyn", "last" : "Contreras" }, "tel" : "(958) 456-3316" }
	{ "id_user" : 58, "nombre" : { "first" : "Meagan", "last" : "Crosby" }, "tel" : "(970) 469-2295" }
	{ "id_user" : 38, "nombre" : { "first" : "Oconnor", "last" : "Cross" }, "tel" : "(971) 594-3084" }
	
	
	//Medicion sin indices
  
	db.usuario.find({},{_id:0, id_user:1, nombre:1, telefono:1 }).explain("executionStats")
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.usuario",
                "indexFilterSet" : false,
                "parsedQuery" : {

                },
                "queryHash" : "88F1E1B4",
                "planCacheKey" : "88F1E1B4",
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "_id" : 0,
                                "id_user" : 1,
                                "nombre" : 1,
                                "telefono" : 1
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "direction" : "forward"
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 100,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 100,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 100,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 102,
                        "advanced" : 100,
                        "needTime" : 1,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "transformBy" : {
                                "_id" : 0,
                                "id_user" : 1,
                                "nombre" : 1,
                                "telefono" : 1
                        },
                        "inputStage" : {
                                "stage" : "COLLSCAN",
                                "nReturned" : 100,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 102,
                                "advanced" : 100,
                                "needTime" : 1,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "direction" : "forward",
                                "docsExamined" : 100
                        }
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}

	//Añadir Indice a USUARIO
		db.usuario.createIndex({id_user:1, nombre:1, telefono:1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
	
		db.usuario.createIndex({id_user:1, nombre:1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "ok" : 1
}

  
  
  /* Listar usuarios con carrito y estado del carrito - NO FUNCIONA!! * /

  db.usuario.aggregate(
    [
      {$lookup: { from: 'carrito',
                  localField: 'id_user.nombre',
                  foreignField: 'id_user.estado',
                  as: 'carritos'}
      },
    {$unwind: '$carritos'},
    {$project: {_id:0, nombre: "$id_user.nombre", email: "$id_user.email", estadoCarrito: "$id_user.estado" }
  }

    ]

  )*/




/* NO FUNCIONA !!! */

  db.carrito.aggregate(
    [
      {$lookup: { from: 'usuario',
                  localField: 'id_user.estado',
                  foreignField: 'id_user.nombre',
                  as: 'carritos'}
      },
    {$unwind: '$carritos'},
    {$project: {_id:0, nombre: "$id_user.nombre", email: "$id_user.email", estadoCarrito: "$id_user.estado" }
  }

    ]

  )


  /* CONSULTAS DE PRODUCTOS */

  /* Producto, precio y si en oferta, por orden alfabético de producto  -- FUNCIONA!!! */

db.productos.aggregate(
    [
	{$match: {"oferta":true}},
		{$sort: {"nombre":1}},
        {$project: {"nombre":1, "precio":1, "oferta":1}}
    ]
  )

  /* Producto, precio y si en oferta, agrupados por productos en oferta ordenados alfabéticamente -- FUNCIONA!!! */
  db.productos.aggregate(
    [
        {$sort: {"oferta":-1, "nombre":1}},
        {$project: {"nombre":1, "precio":1, "oferta":1}}
    ]
  )


 /* CONSULTAS DE CARRITOS */
 
 /* Indice Carrito - Id_user - Estado */
	db.carrito.createIndex({id_user:1, estado:1})
	
	db.carrito.find( {"id_user":5},{_id:0, "id_user":"id_user","estado":"estado"} ).explain("executionStats")
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "Tienda_Jimena.carrito",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "id_user" : {
                                "$eq" : 5
                        }
                },
                "queryHash" : "D80D4089",
                "planCacheKey" : "021AB9B0",
                "winningPlan" : {
                        "stage" : "PROJECTION_COVERED",
                        "transformBy" : {
                                "_id" : 0,
                                "id_user" : "id_user",
                                "estado" : "estado"
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "id_user" : 1,
                                        "estado" : 1
                                },
                                "indexName" : "id_user_1_estado_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "id_user" : [ ],
                                        "estado" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "id_user" : [
                                                "[5.0, 5.0]"
                                        ],
                                        "estado" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 2,
                "executionTimeMillis" : 23,
                "totalKeysExamined" : 2,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "PROJECTION_COVERED",
                        "nReturned" : 2,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 3,
                        "advanced" : 2,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "transformBy" : {
                                "_id" : 0,
                                "id_user" : "id_user",
                                "estado" : "estado"
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 2,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 3,
                                "advanced" : 2,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "keyPattern" : {
                                        "id_user" : 1,
                                        "estado" : 1
                                },
                                "indexName" : "id_user_1_estado_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "id_user" : [ ],
                                        "estado" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "id_user" : [
                                                "[5.0, 5.0]"
                                        ],
                                        "estado" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                },
                                "keysExamined" : 2,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0
                        }
                }
        },
        "serverInfo" : {
                "host" : "DESKTOP-70596F9",
                "port" : 27017,
                "version" : "4.2.0",
                "gitVersion" : "a4b751dcf51dd249c5865812b390cfd1c0129c30"
        },
        "ok" : 1
}

  /* Carritos ordenados por id_user, estado asc, cantidad de productos, y precio -- FUNCIONA!! */
  db.carrito.aggregate(
    [
        {$sort: {"estado":1}},
        {$project: {"id_user":1, "estado":1, "totalqty":1, "precio":1}}
    ]
)


/* Carritos ordenados por id_user, estado des, cantidad de productos, y precio -- FUNCIONA!! */
db.carrito.aggregate(
    [
        {$sort: {"estado":-1}},
        {$project: {"id_user":1, "estado":1, "totalqty":1, "precio":1}}
    ]
)

// Carritos del usuario 5

	> db.carrito.find( {"id_user":5} )

	> db.carrito.find( {"id_user":5} )
	{ "_id" : ObjectId("5d95b9f5a564b802642fd248"), "id_user" : 5, "estado" : "PAGADO", "prods" : [ { "SKU" : 128, "qty" : 42 }, { "SKU" : 236, "qty" : 35 }, { "SKU" : 33, "qty" : 47 }, { "SKU" : 255, "qty" : 23 } ], "totalqty" : 147, "precio" : 0 }
	{ "_id" : ObjectId("5d95b9f5a564b802642fd255"), "id_user" : 5, "estado" : "ACTIVO", "prods" : [ { "SKU" : 186, "qty" : 28 }, { "SKU" : 52, "qty" : 10 }, { "SKU" : 218, "qty" : 13 }, { "SKU" : 307, "qty" : 21 } ], "totalqty" : 72, "precio" : 0 }

//Estado de los carritos de un usuario
	> db.carrito.find( {"id_user":5},{_id:0, "id_user":"id_user","estado":"estado"} )
	{ "id_user" : 5, "estado" : "PAGADO" }
	{ "id_user" : 5, "estado" : "ACTIVO" }




/* GESTION DE CARRITO */
	
	//Actualizar Totales 
	
			db.carrito.aggregate([
		{
		  $project: {
		  _id:"$_id",
		  id_user:"$id_user",
		  estado:"$estado",
		  prods:"$prods",
		  totalqty:{$sum:"$prods.qty"},
		  precio:"$precio"
		}
		},
		{$out:"carrito"}
		])
		
		
	//Añadir Producto al carrito  - FUNCIONA
	> db.carrito.insert(    {        "id_user":3,        "estado":"ACTIVO",        "prods.SKU":25,        "prods.qty":5,        "totalqty":5   } )
	WriteResult({ "nInserted" : 1 })	
	
	
		


	//Inserción del un carrito
	> var temp = db.productos.find({"SKU":25},{"_id":0,"precio":1}).toArray() 
	> temp
	[ { "precio" : "1256.01" } ]
	> db.carrito.insert({"id_user":3,"estado":"ACTIVO","prods.SKU":25,"prods.qty":5,"totalqty":5, "precio":temp[0].precio} )
	WriteResult({ "nInserted" : 1 })
	
	/* Probando el calculo de los Precios totales 
	var temp = db.productos.find({},{"_id":0,"SKU":1,"precio":1}).toArray()
	var temp2 = db.carrito.find({},{"_id":0,"SKU":1,"precio":1}).toArray()
	///db.carrito.insert({"id_user":3,"estado":"ACTIVO","prods.SKU":25,"prods.qty":5,"totalqty":5, "precio":temp[0].precio} )
	
		db.carrito.aggregate([
		{
		  $project: {
		  _id:"$_id",
		  id_user:"$id_user",
		  estado:"$estado",
		  prods:"$prods",
		  totalqty:{$sum:"$prods.qty"},
		  
		  prods.precio:temp[0].precio
		}
		},
		{$out:"carrito"}
		])
	
		VERSION 0.1 --> EN EVOLUCIÓN
	
	*/
