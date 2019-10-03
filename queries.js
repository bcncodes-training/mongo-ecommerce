//////////////////CATEGORIAS

//Queries creación de categorias parent child + ancestors

db.categories.insert( { title: "Botas Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Gore-tex Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Casual Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Indoor Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Sandalias Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Running Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Treking Mujer", ancestors: [ "Mujer" ], parent: "Calzado" } )
db.categories.insert( { title: "Casual Mujer", ancestors: [ "Mujer" ], parent: "Ropa" } )
db.categories.insert( { title: "Indoor Mujer", ancestors: [ "Mujer" ], parent: "Ropa" } )
db.categories.insert( { title: "Sandalias Mujer", ancestors: [ "Mujer" ], parent: "Ropa" } )
db.categories.insert( { title: "Running Mujer", ancestors: [ "Mujer" ], parent: "Ropa" } )
db.categories.insert( { title: "Treking Mujer", ancestors: [ "Mujer" ], parent: "Ropa" } )
db.categories.insert( { title: "Botas Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Gore-tex Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Casual Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Indoor Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Sandalias Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Running Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Treking Hombre", ancestors: [ "Hombre" ], parent: "Calzado" } )
db.categories.insert( { title: "Casual Hombre", ancestors: [ "Hombre" ], parent: "Ropa" } )
db.categories.insert( { title: "Indoor Hombre", ancestors: [ "Hombre" ], parent: "Ropa" } )
db.categories.insert( { title: "Sandalias Hombre", ancestors: [ "Hombre" ], parent: "Ropa" } )
db.categories.insert( { title: "Running Hombre", ancestors: [ "Hombre" ], parent: "Ropa" } )
db.categories.insert( { title: "Treking Hombre", ancestors: [ "Hombre" ], parent: "Ropa" } )

//////////////////////MANTENIMIENTO CATEGORIAS

//Se podría modificar la estructura del arbol de categorias con, por ejemplo, la siguiente querie:

db.categories.update( {_id: ObjectId("5d964b74c6e92f9e942a7d34")}  , {$set: {ancestors: [ "Hombre", "promoción" ]}}  )

//Mostrar hilo de Ariadna   <------------------------ PENDIENTE 


//CREACIÓN PRODUCTOS

db.products.insert(  )

 
