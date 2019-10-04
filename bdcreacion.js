
//////////////////CATEGORIAS

////Queries creación de categorias parent child + ancestors, una por una. Generacion _ID automatica por MongoDB

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



////////////////////////////////////CREACIÓN PRODUCTOS


//jsonGenerator

// [
//     {
//       'repeat(25, 25)': {
//         _id: '{{objectId()}}',
//         title: '{{lorem(2, "words")}}',
//         category_id: '',
//         details: '{{lorem(2, "sentences")}}',
//         brand: '{{random( ["ADIDAS"],    ["Altus"],    ["Asics "],    ["Asolo"],    ["Bestard "],    ["Boreal"],    ["Brooks"],    ["Columbia"],    ["Converse"],    ["Dolomite"],    ["Garmont"],    ["Hi-tec "],    ["Joma"],    ["Merrell"] )}}',
//         price: '{{floating([20], [120], [0])}}',
//         stock: { 
//           40:1,
//         },
//         tags: []
//       }
//     }
//   ]


////Querie creación de "lote" de productos

db.products.insertMany( 
    [
        {
          "_id": "5d972f1afdbbf3632e43fec4",
          "title": "et et",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d23"),
          "details": "Non quis veniam non eu nulla Lorem. Culpa voluptate do esse occaecat exercitation deserunt.",
          "brand": "Garmont",
          "price": 43,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a7038fb5d9aefc3cf",
          "title": "magna amet",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d24"),
          "details": "Id culpa dolor reprehenderit cupidatat non incididunt. Nostrud dolore proident reprehenderit laborum qui exercitation.",
          "brand": "Dolomite",
          "price": 30,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a5d845418fc3ed64d",
          "title": "aliqua ad",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d32"),
          "details": "Non Lorem tempor magna sint consectetur aliquip culpa Lorem. Nisi occaecat aute enim irure tempor commodo excepteur exercitation nisi magna id do eu.",
          "brand": "Converse",
          "price": 96,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1ad2c0e8d73068a86d",
          "title": "incididunt consequat",
          "category_id": ObjectId("5d964b70c6e92f9e942a7d1e"),
          "details": "Ad quis esse exercitation deserunt fugiat qui tempor laborum proident. Est deserunt Lorem aliquip minim veniam consectetur aliquip dolor in.",
          "brand": "Boreal",
          "price": 78,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a3d196c8e8c4e8481",
          "title": "consequat et",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d22"),
          "details": "Culpa esse ipsum irure aliquip non eiusmod incididunt quis reprehenderit sint id sunt veniam dolore. Sit nostrud dolor duis ipsum sint.",
          "brand": "Asolo",
          "price": 82,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a13c93681d6b3e5c9",
          "title": "minim enim",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d2b"),
          "details": "Ex ullamco esse consectetur non. Excepteur deserunt consectetur sunt voluptate ex enim consectetur quis do aliqua proident.",
          "brand": "Hi-tec ",
          "price": 29,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a25722b9e6e448825",
          "title": "proident ex",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d26"),
          "details": "Culpa mollit eu elit mollit dolore qui minim commodo ex. Pariatur officia dolor quis ex labore id et excepteur enim minim fugiat.",
          "brand": "Columbia",
          "price": 33,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a87c1633ee1171a0c",
          "title": "id et",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d2c"),
          "details": "Ea elit Lorem minim exercitation qui minim in culpa et minim minim eu. Sit enim reprehenderit nulla nostrud aliquip aliquip.",
          "brand": "Merrell",
          "price": 69,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a6fd1b6fd15887aec",
          "title": "non adipisicing",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d21"),
          "details": "Dolore nostrud elit aute incididunt anim cillum est voluptate. Duis Lorem aute cillum ea magna aliquip velit ullamco ex.",
          "brand": "Converse",
          "price": 28,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a8130465fcdaebc69",
          "title": "id ullamco",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d31"),
          "details": "Sunt aliquip minim irure qui culpa deserunt velit laboris sit pariatur sit. Cillum adipisicing qui nostrud fugiat nisi occaecat do.",
          "brand": "Brooks",
          "price": 94,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a790c9652a99be35b",
          "title": "duis culpa",
          "category_id": ObjectId("5d964b70c6e92f9e942a7d1f"),
          "details": "Lorem sit officia labore cillum dolore duis laborum commodo do enim officia id. Anim dolore cillum esse anim reprehenderit ut in.",
          "brand": "Converse",
          "price": 36,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a2d5e79e4d11fa64b",
          "title": "velit ad",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d33"),
          "details": "In aliqua consequat deserunt velit labore incididunt enim do dolor. Commodo adipisicing duis occaecat commodo voluptate nisi ad eu nisi laboris excepteur tempor et.",
          "brand": "Columbia",
          "price": 84,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a144885bbe7dbfe7d",
          "title": "velit laborum",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d20"),
          "details": "Enim pariatur irure mollit eiusmod ex officia Lorem. Nulla aliqua cupidatat exercitation nostrud ullamco mollit.",
          "brand": "Converse",
          "price": 52,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a905a4f8e86edfe10",
          "title": "pariatur aliquip",
          "category_id": ObjectId("5d964b4cc6e92f9e942a7d1d"),
          "details": "Dolore labore ea reprehenderit incididunt. Ut adipisicing mollit velit pariatur.",
          "brand": "Asolo",
          "price": 46,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1aab9e699badfe1822",
          "title": "nulla incididunt",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d27"),
          "details": "Eiusmod ipsum consequat nulla non laboris aute commodo excepteur voluptate consequat aute nostrud ea anim. Minim est ipsum consectetur excepteur esse occaecat eu ea elit nostrud.",
          "brand": "Bestard ",
          "price": 42,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1ac438305d6045b2d6",
          "title": "cillum veniam",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d28"),
          "details": "Laborum id eu eu ullamco. Laborum ullamco sint dolore est cillum eiusmod proident culpa.",
          "brand": "Merrell",
          "price": 113,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a6cbc4a3467f6231d",
          "title": "Lorem dolor",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d2e"),
          "details": "Incididunt eu et nulla consequat aute culpa in nostrud Lorem consequat consectetur mollit sint. Ipsum velit consectetur ut nulla fugiat non sunt consectetur.",
          "brand": "Columbia",
          "price": 89,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a0c076fca9a8e26cd",
          "title": "esse incididunt",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d29"),
          "details": "Consectetur laborum sit non anim exercitation ea ut ad reprehenderit cillum voluptate velit nisi irure. Culpa do aliquip sit id deserunt magna id sit est ex ut nostrud ex.",
          "brand": "Brooks",
          "price": 79,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a45e12a7f2b75ca36",
          "title": "non qui",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d30"),
          "details": "Aliquip cupidatat commodo cupidatat exercitation sit minim nulla pariatur dolore consectetur aliqua do fugiat mollit. Occaecat quis ex do pariatur laboris fugiat ex laborum minim est irure.",
          "brand": "Altus",
          "price": 57,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a14817a5735ffb556",
          "title": "quis irure",
          "category_id": ObjectId("5d964b71c6e92f9e942a7d2a"),
          "details": "Dolore Lorem est consectetur nostrud qui do adipisicing. Nisi veniam proident tempor dolore exercitation sunt sunt esse non tempor magna aliquip.",
          "brand": "Altus",
          "price": 42,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a50b6e8b6f7d3a71d",
          "title": "culpa ut",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d2d"),
          "details": "Enim ut eu aliquip et fugiat id enim dolore aliqua. Ad reprehenderit amet laborum irure incididunt deserunt ad reprehenderit deserunt ad mollit sint cupidatat.",
          "brand": "Asolo",
          "price": 120,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1a5a0c85c8b56b129b",
          "title": "voluptate pariatur",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d2d"),
          "details": "Exercitation elit reprehenderit pariatur nostrud occaecat dolore adipisicing ut exercitation. Pariatur ut exercitation anim adipisicing consequat sit quis.",
          "brand": "Asolo",
          "price": 49,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1b39ff3b85f9f973ca",
          "title": "id id",
          "category_id":ObjectId("5d964b72c6e92f9e942a7d33"),
          "details": "Adipisicing culpa et qui eiusmod cupidatat ut. Anim dolor nisi nostrud ad.",
          "brand": "Brooks",
          "price": 67,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1b2bcd13168f5fa607",
          "title": "amet dolore",
          "category_id": ObjectId("5d964b4cc6e92f9e942a7d1d"),
          "details": "Irure qui non ullamco ut labore ipsum non aute. Nisi ullamco sint pariatur esse.",
          "brand": "Garmont",
          "price": 97,
          "stock": {
            "40": 1
          },
          "tags": []
        },
        {
          "_id": "5d972f1bd0dc9853ba3d7936",
          "title": "cillum aute",
          "category_id": ObjectId("5d964b72c6e92f9e942a7d31"),
          "details": "Cillum adipisicing voluptate labore fugiat ut Lorem in minim veniam sunt quis amet aliquip. Cupidatat aliqua amet anim irure dolor.",
          "brand": "Boreal",
          "price": 61,
          "stock": {
            "40": 1
          },
          "tags": []
        }
      ]
 )

    
/// Corregir "stock". Todos salen con tallas de calzado y también hay ropa. HECHO

let cambiarStock = db.products.aggregate([{
    $lookup:
      {
        from: "categories",
        localField: "category_id",
        foreignField: "_id",
        as: "Ariadna"
      }    
 
 }])

cambiarStock.forEach(element => {
     if(parent="Ropa"){
        db.products.update(
            {},
            {
                $set:{stock: {XS:1, S:3, M:4, L:1, XL:1}
                }
            },
             { multi: true }
            )
     }
     
 });
