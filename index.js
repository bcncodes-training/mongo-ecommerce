//collection products
db.product.aggregate([ { $group: { "_id": "$name", "data": { "$first": "$$ROOT"} } }, { "$project": { "price": "$data.price", "name": "$data.name", "color": "$data.color", "sizes": "$data.sizes", "tags": "$data.tags"} } ] ).pretty()

//enseña los productos destacados por la cantidad de producto disponible que sea menor
let promo = db.product.aggregate([{$match:{qty:{$gte:180}}},{$group:{_id:"$name", oferta:{$sum:"$discount"}}}])
promo.forEach(function(miDoc) {print(`nombre: {${miDoc._id}} | Precio Oferta: {${miDoc.oferta}}`)})
nombre: {Botella de Agua Plastico Be1} | Precio Oferta: {11.33}
nombre: {Botella de Agua Plastico Ba1} | Precio Oferta: {10.79}

//Enseña los productos señalados//
db.product.find({"qty":{"$gte":180}}).pretty()
db.product.aggregate([{$match: {}},{$group:{_id:"$name", disponibles:{$sum:"$qty"}}},{$sort:{disponibles:-1}}])
{ "_id" : "Botella de Agua Plastico Ba1", "disponibles" : 200 }
{ "_id" : "Botella de Agua Plastico Be1", "disponibles" : 180 }
{ "_id" : "Botella de Agua Cristal", "disponibles" : 121 }
{ "_id" : "Botella de Agua Acero Inox", "disponibles" : 100 }

let ofertas = db.product.aggregate([{$match: {}},{$group:{_id:"$name", disponibles:{$sum:"$qty"}}}])
> ofertas.forEach(function(miDoc) {print(`nombre: {${miDoc._id}} | disponibles: {${miDoc.disponibles}}`)})
nombre: {Botella de Agua Acero Inox} | disponibles: {100}
nombre: {Botella de Agua Plastico Be1} | disponibles: {180}
nombre: {Botella de Agua Plastico Ba1} | disponibles: {200}
nombre: {Botella de Agua Cristal} | disponibles: {121}

db.product.aggregate([{$match: {$or: [ { qty: {  $lt: 150 } }, { qty: { $gte: 180 } } ]}},{$group:{_id:"$name", disponibles:{$sum:"$qty"}}}])
{ "_id" : "Botella de Agua Cristal", "disponibles" : 121 }
{ "_id" : "Botella de Agua Plastico Ba1", "disponibles" : 200 }
{ "_id" : "Botella de Agua Acero Inox", "disponibles" : 100 }
{ "_id" : "Botella de Agua Plastico Be1", "disponibles" : 180 }
db.product.aggregate([{$match: { qty: {  $lt: 150 } }},{$group:{_id:"$name", disponibles:{$sum:"$qty"}}}])
{ "_id" : "Botella de Agua Cristal", "disponibles" : 121 }
{ "_id" : "Botella de Agua Acero Inox", "disponibles" : 100 }
db.product.aggregate([{$match: { qty: {  $gte: 180 } }},{$group:{_id:"$name", disponibles:{$sum:"$qty"}, precio:"$discount"}}])
{ "_id" : "Botella de Agua Plastico Be1", "disponibles" : 180 }
{ "_id" : "Botella de Agua Plastico Ba1", "disponibles" : 200 }

db.product.aggregate([{$match: { qty: {  $gte: 180 } }},{$group:{_id:"$name", precio_oferta:{$sum:"$discount"}}}])
{ "_id" : "Botella de Agua Plastico Be1", "precio_oferta" : 11.33 }
{ "_id" : "Botella de Agua Plastico Ba1", "precio_oferta" : 10.79 }

//incrementar una cantidad al producto y restar una cantidad al producto
db.product.update({name:"Botella de Agua Cristal"},{$inc:{qty:1}})
db.product.update({name:"Botella de Agua Cristal"},{$inc:{qty:-3}})

//actualizar un collection
db.product.update({name:"Botella de Agua Plastico Be1"},{name:"Botella de Agua Plastico Be1", price:12.99, qty:180},{upsert:true})
WriteResult({
	"nMatched" : 0,
	"nUpserted" : 1,
	"nModified" : 0,
	"_id" : ObjectId("5d95b0ceffcc75f29c4cfdec")
})
//Cart 
db.cart.update({status:"active"},{status:"active", last_modified: new Date()},{upsert:true})

//user -creación de usuarios
db.customers.insert({name:"Roberto",surname:"García",phone:622622622,email:"some@mail.com"})
db.customers.insert({name:"Angela",surname:"Turizo",phone:622622633,email:"some1@mail.com"})

//listado de todos los productos
let all_prod = db.product.aggregate([{$match:{}},{$group:{_id:"$name", oferta:{$sum:"$discount"}}}])
promo.forEach(function(miDoc) {print(`nombre: {${miDoc._id}} | Precio Oferta: {${miDoc.oferta}}`)})

//Indexación
db.product.createIndex({"name":1})
db.product.createIndex({"price":1})
db.product.createIndex({"qty":1})
db.product.createIndex({"color":1})
db.product.createIndex({"sizes":1})

db.getCollectionNames().forEach(function(product) {
    indexes = db[product].getIndexes();
    print("Indexes for " + product + ":");
    printjson(indexes);
 });

 Indexes for product:
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1
		},
		"name" : "_id_",
		"ns" : "e-commerce.product"
	},
	{
		"v" : 2,
		"key" : {
			"_fts" : "text",
			"_ftsx" : 1
		},
		"name" : "Tags_text",
		"ns" : "e-commerce.product",
		"weights" : {
			"Tags" : 1
		},
		"default_language" : "english",
		"language_override" : "language",
		"textIndexVersion" : 3
	},
	{
		"v" : 2,
		"key" : {
			"name" : 1
		},
		"name" : "name_1",
		"ns" : "e-commerce.product"
	},
	{
		"v" : 2,
		"key" : {
			"qty" : 1
		},
		"name" : "qty_1",
		"ns" : "e-commerce.product"
	},
	{
		"v" : 2,
		"key" : {
			"price" : 1
		},
		"name" : "price_1",
		"ns" : "e-commerce.product"
	},
	{
		"v" : 2,
		"key" : {
			"sizes" : 1
		},
		"name" : "sizes_1",
		"ns" : "e-commerce.product"
    }
    
// Busqueda por palabra plstico para enseñar las dos categorias de plastico
db.product.aggregate( [ { $match: { $text: { $search: "plastico"} } }, { $sort: { score: { $meta:"textScore"} } },  {$group:{ _id: "$category_id" } } ] )
{ "_id" : "Boca estrecha" }
{ "_id" : "Boca ancha" }

// Busqueda por tags //
db.product.aggregate([{$unwind: "$tags"}])
db.product.createIndex({"tags": "text"})
db.product.getIndexes()
db.product.explain()
db.product.find({tags:"plastico"}).pretty()
db.product.find({tags:"botella"}).pretty()
db.product.find({tags:"cristal"}).pretty()
db.product.find({ $text: { $search: "Acero"} } )

db.products.aggregate([{$group:{_id:"name",precio:"$price"}}])
