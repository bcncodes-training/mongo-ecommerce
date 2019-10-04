
/*
    Crear una bd para un ecommerce que contenga las siguientes colecciones:
    USER
    PRODUCT
    CATEGORY
    CART

Generar consultas sobre las colecciones anteriores para llevar a cabo las siguientes operaciones:
    Generar algunas consultas sobre productos, que puedan ser requeridas por los usuarios (Buscar por tipo de producto, talla, tamaño, precios, recomendados, ofertas, últimas adquisiciones, etc…)

crear indices nombre producto, modelo, precio, categoria, tipo (recomendado,oferta,promocion), fecha (novedades)
*/

db.product.createIndex({"nombre":"text","precio":1,"finput":1});
db.user.createIndex({"nombre":1,"e-mail":1});
db.category.createIndex({"name":1,"padre":1});
db.cart.createIndex({"userid":1,"state":1,"finput":1});


// aggregates con lookouts

// Buscar productos por nombre

db.product.find( { $text: { $search: "Lenovo" } } )

// Buscar productos por rango de precios

db.product.find( { $and: [ { precio: { $gte: 20 } }, { precio: { $lte: 100 } } ] } )

// Buscar productos por rango de precios y categoria busqueda por product_id

db.product.aggregate([
  {$match:{ $and:[ 
    {"precio":{ $gte: 20 , $lte: 1000 }},
    {"categoria":"5d9392ff1c9d440000261a17"}
  ]}}         
])

// busqueda por catgory_name y precio produto

db.category.aggregate([
  {
    "$project": { "_id": {"$toString": "$_id"},"name":"$name"}
  },
  {
    "$lookup": {
      "from": "product",
      "localField": "_id",
      "foreignField": "categoria",
      "as": "role"
    }
  },
  {$match:{ $and:[ 
          {"role.precio":{ $gte: 20 ,$lte: 1000}},
          {"name":{$in:["Ordenadores"]}}
        ]}}
])

/*
Realizar un mantenimiento de la jerarquía de categorías añadiendo una nueva categoría y modificando una categoría. Realizar también las consultas para obtener el hilo de Ariadna de un producto determinado

insertar categoria con padre o sin.
*/

db.category.insert( { name: ** nombreCategoria **, padre: ** padreId ** } )
db.category.insert( { name: ** nombreCategoria ** } )

// Crear indices nombre y padre

db.category.createIndex({"name":"text","padre_id":1})     

/*
hilo de ariadna -> buscar el padre del padre hasta encontrar huerfano
    Gestionar el carrito: Añadir un producto al carrito, eliminar un producto del carrito, abandono del carrito sin comprar, pagar.

añadir a carro

ver si hay stock
*/

db.product.aggregate(
{"$project": { "_id": {"$toString": "$_id"},cantidad:"$cantidad"}},
{$match:{"_id":"5d95c2170d79970740c4ccc9"}}
)

/*
añadir producto al carro si no existe y si existe sumarle una unidad 
*/
db.cart.update(
  { "userid":"5d8f8e8f1c9d4400007120d3", state:"A","products.prodid":"5d95a8610d79970740c4ccbe"},
  { $inc: {"products.qty": 1 } },
  { upsert: true}
)