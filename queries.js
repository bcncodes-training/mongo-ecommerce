

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


let hiloAriadna = (_idProducto)=>
db.products.aggregate(
    [
    {$match: 
        {
            _id: _idProducto}
            },
    {
       $lookup:
         {
           from: "categories",
           localField: "category_id",
           foreignField: "_id",
           as: "Ariadna"
         }
    }
    ,
    {
        $unwind: "$Ariadna"
    },
    {
        $unwind: "$Ariadna.ancestors"
    },
    {
        $project:  {_id:0, "Ariadna.title":1, "Ariadna.parent":1, "Ariadna.ancestors":1}
        }
    
    ]
)

hiloAriadna("5d972f1afdbbf3632e43fec4")
//Resultado: 
{
    "Ariadna" : {
        "title" : "Treking Mujer",
        "ancestors" : "Mujer",
        "parent" : "Calzado"
    }
}

// Generar algunas consultas sobre productos, que puedan ser requeridas por los usuarios 
// (Buscar por tipo de producto, talla, tamaño, precios, recomendados, ofertas, 
//     últimas adquisiciones, etc…)

//Tipo de producto: 

let filtroTipoProducto = (tipoProducto)=> db.products.aggregate([
    {
        $lookup:
             {
               from: "categories",
               localField: "category_id",
               foreignField: "_id",
               as: "Ariadna"
             }
    },
    {
        $match: 
            {$or:[{"Ariadna.parent":tipoProducto},{"Ariadna.title":tipoProducto}, {"Ariadna.ancestors":tipoProducto}]}
        }
    
    ])
    
    //Así, se puede buscar cualquier "nivel de categoria":
    // filtroTipoProducto("Mujer")  filtroTipoProducto("Casual Mujer") filtroTipoProducto("Calzado") 

































