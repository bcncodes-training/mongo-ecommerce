

//////////////////////////////////MANTENIMIENTO CATEGORIAS


//////Obtener todas las categorias existentes (en un array)

db.categories.aggregate(
    [
    {
        $group: 
        {
            _id: null,
            array: {$addToSet: "$title"}
            }
        }
    ])

//Resultado:     
    {
        "_id" : null,
        "array" : [ 
            "Sandalias Hombre", 
            "Indoor Hombre", 
            "Botas Mujer", 
            "Casual Mujer", 
            "Sandalias Mujer", 
            "Treking Hombre", 
            "Running Hombre", 
            "Casual Hombre", 
            "Running Mujer", 
            "Indoor Mujer", 
            "Botas Hombre", 
            "Treking Mujer", 
            "Gore-tex Mujer", 
            "Gore-tex Hombre"
        ]
    }

//////Obtener categorias existentes descendientes de "Ropa"

db.categories.aggregate(
    [
    {$match: 
        {
            parent: "Ropa"}
            },
    {
        $group: 
        {
            _id: null,
            array: {$addToSet: "$title"}
            }
        }
    ])

//Resultado: 
{
    "_id" : null,
    "array" : [ 
        "Treking Hombre", 
        "Running Hombre", 
        "Sandalias Hombre", 
        "Casual Hombre", 
        "Treking Mujer", 
        "Indoor Hombre", 
        "Casual Mujer", 
        "Indoor Mujer", 
        "Sandalias Mujer", 
        "Running Mujer"
    ]
}


//Se podría modificar la estructura del arbol de categorias con, por ejemplo, la siguiente querie:

db.categories.update( {_id: ObjectId("5d964b74c6e92f9e942a7d34")}  , {$set: {ancestors: [ "Hombre", "Unisex" ]}}  )

//Mostrar hilo de Ariadna  

db.products.aggregate(
    [
    {$match: 
        {
            _id: "5d972f1afdbbf3632e43fec4"}
            },
    {
       $lookup:
         {
           from: "categories",
           localField: "category_id",
           foreignField: "_id",
           as: "arrayAlejandria"
         }
    }
    ,
    {
        $unwind: "$arrayAlejandria"
    },
    {
        $unwind: "$arrayAlejandria.ancestors"
    },
    {
        $project:  {_id:0, "arrayAlejandria.title":1, "arrayAlejandria.parent":1, "arrayAlejandria.ancestors":1}
        }
    
    ]

//Resultado: 

{
    "arrayAlejandria" : {
        "title" : "Treking Mujer",
        "ancestors" : "Mujer",
        "parent" : "Calzado"
    }
}


//////////////////////////////////MANTENIMIENTO PRODUCTOS

///Añadir TAGS: 



































