use ecommerce

// insertar usuario
// busquedas en el futuro
// carros que son el carro activo
var usuario1 = {"nombre":"Paco","email":"pago@gmail.com","telefono":"2423423432","carros": []}
var usuario2 = {"nombre":"Juan","email":"Juan@gmail.com","telefono":"2342342312347","carros": []}
var usuario3 = {"nombre":"Pedro","email":"Pedro@gmail.com","telefono":"8797907899","carros": []}

db.usuario.insertMany([usuario1,usuario2,usuario3]);

// insertar cagetoria

var category1 = {"nombre":"periferico","path":"null"}
var category2 = {"nombre":"mouse","path":",periferico,"}
var category3 = {"nombre":"teclado","path":",periferico,"}
var category4 = {"nombre":"monitor","path":",periferico,"}
var category5 = {"nombre":"sobremesa","path":",periferico,"}
var category6 = {"nombre":"impresora","path":",periferico,"}
var category7 = {"nombre":"impresora laser","path":",periferico,impresora" }
var category8 = {"nombre":"impresora tinta","path":",periferico,impresora" }

db.category.insertMany([category1,category2,category3,category4,category5,category6,category7,category8]);

//  insert producto

//  insert producto y categoría
// creamos una variable donde guardamos la categoría mouse, para después añadirla al producto creando una referencia
var indexMouse = db.category.findOne({nombre:"mouse"});
db.product.insert({"nombre":"Tempest MS100 Paladin Ratón Gaming 1600DPI", "category":indexMouse._id, "cantidad": 15,"precio":4.99, calificacion:79, adquisiciones: "2019-01-04"});
db.product.insert({"nombre":"Logitech B100 Ratón Negro", "category":indexMouse._id, "cantidad": 25, precio: 4.99, calificacion:67, adquisiciones: "2019-01-04"});
db.product.insert({"nombre":"Apple Magic Mouse 2 Ratón Inalámbrico Gris Espacial", "category":indexMouse._id, "cantidad": 12, precio: 94.99, calificacion:94, adquisiciones: "2018-09-04"});
db.product.insert({"nombre":"Apple Magic Mouse 2 Reacondicionado", "category":indexMouse._id, "cantidad": 34, precio: 55, calificacion:84, adquisiciones: "2019-06-04"});

var indexPrint = db.category.findOne({nombre:"impresora laser"});
db.product.insert( {"nombre":"Brother HL-L2350DW Impresora Láser Monocromo WiFi", "category":indexPrint._id, "cantidad": 19, precio: 100.09, calificacion:79, adquisiciones: "2019-01-04"})
db.product.insert( {"nombre":"Brother HL-L3230CDW Impresora Láser Color Dúplex Wifi", "category":indexPrint._id, "cantidad": 12, precio: 202.09, calificacion:84, adquisiciones: "2019-08-04"})
db.product.insert( {"nombre":"Brother HL-L2370DN Impresora Láser Monocromo", "category":indexPrint._id, "cantidad": 23, precio: 112.45, calificacion:67, adquisiciones: "2019-04-04"})
db.product.insert( {"nombre":"HP LaserJet Pro M254nw Impresora Láser Color Wifi Blanca", "category":indexPrint._id, "cantidad": 21, precio: 179.99, calificacion:81, adquisiciones: "2019-03-04"})

indexPrint = db.category.findOne({nombre:"impresora tinta"});
db.product.insert( {"nombre":"HP Officejet Pro 6230 Impresora ePrint WiFi", "category":indexPrint._id, "cantidad": 7, precio: 47.17, calificacion:55, adquisiciones: "2019-06-04"})
db.product.insert( {"nombre":"HP OfficeJet Pro 9022 Multifunción Color Wifi Dúplex", "category":indexPrint._id, "cantidad": 5, precio: 291.35, calificacion:87, adquisiciones: "2019-01-04"})
db.product.insert( {"nombre":"HP OfficeJet Pro 8022 Multifunción Wifi", "category":indexPrint._id, "cantidad": 5, precio: 132.99, calificacion:67, adquisiciones: "2018-03-04"})
 
var indexTeclado = db.category.findOne({nombre:"teclado"});
db.product.insert({"nombre":"Tempest K9 RGB Backlit Teclado Gaming RGB", "category":indexTeclado._id, "cantidad": 30, precio: 14.25, calificacion:45, adquisiciones: "2019-07-04"})
db.product.insert({"nombre":"Newskill Hanshi Spectrum Teclado Mecánico RGB Kailh Blue", "category":indexTeclado._id, "cantidad": 20, precio: 73.99, calificacion:79, adquisiciones: "2019-09-04"})
db.product.insert({"nombre":"Logitech K400+ Wireless Touch Keyboard Negro", "category":indexTeclado._id, "cantidad": 20, precio: 24.99, calificacion:67, adquisiciones: "2019-06-04"})
db.product.insert({"nombre":"Krom Kernel TKL Teclado Mecánico Gaming RGB Compacto", "category":indexTeclado._id, "cantidad": 13, precio: 48.99, calificacion:68, adquisiciones: "2019-03-04"})

var indexMonitor = db.category.findOne({nombre:"monitor"});
db.product.insert( {"nombre":'BenQ GL2580H 24.5" LED FHD', "category":indexMonitor._id, "cantidad": 23, precio: 119, calificacion:55, adquisiciones: "2019-06-04"})
db.product.insert({"nombre":'Acer KG1 KG251QF 24.5" LED FullHD 144Hz FreeSync', "category":indexMonitor._id, "cantidad": 32, precio: 209, calificacion:67, adquisiciones: "2019-01-04"})
db.product.insert( {"nombre":'LG 27UK850-W 27" LED IPS 4K UltraHD FreeSync', "category":indexMonitor._id, "cantidad": 12, precio: 429.99, calificacion:98, adquisiciones: "2018-03-04"})
db.product.insert( {"nombre":'AOC Value-line Q3279VWFD8 31.5" LED IPS Wide QuadHD FreeSync', "category":indexMonitor._id, "cantidad": 23, precio: 199.99, calificacion:76, adquisiciones: "2019-09-04"})
db.product.insert( {"nombre":'Acer ED242QR 23.6" LED FullHD FreeSync Curvo Blanco', "category":indexMonitor._id, "cantidad": 12, precio: 105.99, calificacion:66, adquisiciones: "2019-06-04"})

var indexSobremesa = db.category.findOne({nombre:"sobremesa"});
db.product.insert({"nombre":'PcCom Basic Office Pro Intel Core i5-7400/8GB/240GB SSD', "category":indexSobremesa._id, "cantidad": 12, precio: 381.99, calificacion:45, adquisiciones: "2019-01-04"})
db.product.insert({"nombre":'PcCom Basic Gamer Intel i5-8400/8GB/1TB+240GB SSD/GTX1050', "category":indexSobremesa._id, "cantidad": 12, precio: 562.88, calificacion:56, adquisiciones: "2019-09-04"})
db.product.insert({"nombre":'PcCom Gold Cylon Pro Intel I7-8700/16GB/480GB SSD+1TB/GTX1660 + Windows 10 Home', "category":indexSobremesa._id, "cantidad": 15, precio: 1194.97, calificacion:89, adquisiciones: "2018-06-04"})
db.product.insert({"nombre":'PcCom Silver AMD Ryzen 5 2600/16GB/240GB SSD+1TB/GTX 1660Ti', "category":indexSobremesa._id, "cantidad": 13, precio: 862.97, calificacion:78, adquisiciones: "2019-03-04"})
db.product.insert({"nombre":'PcCom Silver Pro Intel Core i5-8400/16GB/1TB + 240GB SSD/GTX 1660', "category":indexSobremesa._id, "cantidad": 23, precio: 853.97, calificacion:75, adquisiciones: "2019-06-07"})
db.product.insert({"nombre":'HP Pavilion 590-A0101NS AMD E2-9000/4GB/1TB', "category":indexSobremesa._id, "cantidad": 15, precio: 169.97, calificacion:63, adquisiciones: "2018-06-04"})

// insert promociones

var original_id = ObjectId();
var indexProducto = db.product.findOne({"nombre": "Tempest MS100 Paladin Ratón Gaming 1600DPI"});
var promocion1 = { "_id": original_id,"producto": indexProducto._id , "novedad": true}
db.promociones.insert(promocion1);
db.product.update({"nombre": "Tempest MS100 Paladin Ratón Gaming 1600DPI"},{$set: {"promocion": original_id}})

original_id = ObjectId();
var descuento= 10;
var indexProducto = db.product.findOne({"nombre":"HP Officejet Pro 6230 Impresora ePrint WiFi"});
var promocion2 = {"_id": original_id, "producto": indexProducto._id, "novedad": false, "descuento": descuento}
db.promociones.insert(promocion2);
descuento =indexProducto.precio- (indexProducto.precio * descuento/100);
db.product.update({"nombre": "HP Officejet Pro 6230 Impresora ePrint WiFi"},{$set: {"promocion": original_id, precio :descuento}})
 
// 1. consultas por tipo de producto(categoria) Mostraremos todos los productos con categoria mouse
var idMouse=  db.category.findOne({nombre:"mouse"});
 db.product.find({category:{ $exists: true}, "category":idMouse._id},{_id:0,"nombre":1})  

// 2. consulta por recomendados(calificacion) Mostramos 3 productos de la categoría teclado según su calificación máxima
var idTeclado=  db.category.findOne({nombre:"teclado"});
db.product.find({category:{ $exists: true}, "category":idTeclado._id},{_id:0,nombre:-1,calificacion:-1}).sort({calificacion:-1}).limit(3)

// 3. consulta por ofertas(promociones.descuento) por categorias
var match = {$match: {"descuento": {$ne: null}}}
var group = {$group: {  _id: {  "id": "$_id",  "descuento": "$descuento", "producto":"$producto" } } };
var sort = {$sort:{"_id.descuento":-1}}
var lookup = {$lookup:{from:"product",localField:"_id.producto",foreignField: "_id",as: "productoPromocion" }}
var lookup2 = {$lookup:{from:"category",localField:"productoPromocion.category",foreignField: "_id",as: "categoriaPromocion" }}
var match2 ={$match: {"categoriaPromocion.nombre": "impresora tinta"}}
db.promociones.aggregate([match,group,sort,lookup,lookup2]).pretty()

// 4. consulta por las últimas 5 adquisiciones(adquisiciones)
db.product.find({},{"_id":0,nombre:1,"adquisiciones": -1}).sort({"adquisiciones": -1}).limit(5)

// crear index
db.product.createIndex({"nombre":1, "category":1, "cantidad": 1, precio:1, calificacion:1, adquisiciones: 1})
db.product.getIndexes()

db.promociones.createIndex({"_id":1, "producto":1})// resto de campos no indexados por no existir siempre(novedad y descuento)
db.promociones.getIndexes()

db.category.createIndex({"_id":1, "nombre":1, "path":1})
db.category.getIndexes()

db.usuario.createIndex({"_id":1, "nombre":1, "email":1, "telefono":1, "carros":1})// No añadimos el campo "carroActiu" por que se cear en su momento
db.usuario.getIndexes()

db.basket.createIndex({"_id":1, "estado":1, "usuario":1, "total":1, "productos":1}) 
db.basket.getIndexes()
//////////////////////

// Realizar un mantenimiento de la jerarquía de categorías añadiendo una nueva categoría y modificando una categoría.
var categoriaNova = {"nombre": "impresora 3D"}
var pathImpresora = db.category.findOne({"nombre": "impresora"},{"_id": 0, path:1})
pathImpresora = pathImpresora.path + ',' + categoriaNova.nombre + ',';
var category9 = {"nombre":categoriaNova.nombre,"path": pathImpresora }
db.category.insert(category9);
 db.product.insert({"nombre":'PcCom Basic Office Pro Intel Core i5-7400/8GB/240GB SSD', "category":indexSobremesa._id, "cantidad": 12, precio: 381.99, calificacion:45, adquisiciones: "2019-01-04"})

 //  Realizar también las consultas para obtener el hilo de Ariadna de un producto determinado
var match ={$match: {"nombre": "PcCom Basic Office Pro Intel Core i5-7400/8GB/240GB SSD"}}
var lookup = {$lookup:{from:"category",localField:"category",foreignField: "_id",as: "categoriaProducte" }}
var project = {$project: {"_id":0, "categoriaProducte.path":1, "categoriaProducte.nombre":1}}
var var1= db.product.aggregate([match,lookup,project]);

// buscar novedades
var match=  {$match: {  "novedad": true}  };
var lookup = {$lookup:{from:"product",localField:"producto",foreignField: "_id",as: "productoPromocion" }}
db.promociones.aggregate([match,lookup]).pretty()

// buscar ordenado descuento
var match = {$match: {"descuento": {$ne: null}}}
var group = {$group: {  _id: {  "id": "$_id",  "descuento": "$descuento", "producto":"$producto" } } };
var sort = {$sort:{"_id.descuento":-1}}
var lookup = {$lookup:{from:"product",localField:"_id.producto",foreignField: "_id",as: "productoPromocion" }}
db.promociones.aggregate([match,group,sort,lookup]).pretty()

// Gestionar el carrito: 
// 1. Añadir un producto al carrito,
// Añadir producto que no existe en el carro y hay productos necesarios

var nomProducte = "Logitech K400+ Wireless Touch Keyboard Negro";
var indexUser = db.usuario.findOne({"nombre": "Paco"},{_id:0,carroActiu:1});
var unitats = 4;
db.basket.update({_id:indexUser.carroActiu},{$set: {"estado":"cursando"}});
var producteAdd= db.product.findOne({"nombre":nomProducte});
db.basket.update({ _id:indexUser.carroActiu},{$push: {"productos": {"productoId": producteAdd._id, "cantidad": unitats}}})
var total2=db.basket.findOne({_id:indexUser.carroActiu},{_id:0, total: 1})
var total3=  parseFloat(producteAdd.precio * unitats) + parseFloat(total2.total); 
db.basket.update({_id:indexUser.carroActiu},{$set: {total: total3 }})
var cantidad2 = producteAdd.cantidad - unitats;
db.product.update({"nombre":nomProducte},{$set:{cantidad: cantidad2}});

// var nomProducte = "HP Officejet Pro 6230 Impresora ePrint WiFi";
// var nomProducte = "Logitech K400+ Wireless Touch Keyboard Negro";
// var nomProducte = "Logitech K400+ Wireless Touch Keyboard Negro";

// Producto ya existente incrementar la cantidad con stok suficiente
var nomProducte = "Logitech K400+ Wireless Touch Keyboard Negro";
var indexUser = db.usuario.findOne({"nombre": "Paco"},{_id:0,carroActiu:1});
var unitats = 4;
db.basket.update({_id:indexUser.carroActiu},{$set: {"estado":"cursando"}});
var producteAdd= db.product.findOne({"nombre":nomProducte});
// db.basket.update({ _id:indexUser.carroActiu},{$push: {"productos": {"productoId": producteAdd._id, "cantidad": unitats}}})
db.basket.update( { "productos": { $elemMatch: {"productoId": producteAdd._id }}} ,{ $inc: { "productos.$.cantidad": unitats}}) 
var total2=db.basket.findOne({_id:indexUser.carroActiu},{_id:0, total: 1})
var total3=  parseFloat(producteAdd.precio * unitats) + parseFloat(total2.total); 
db.basket.update({_id:indexUser.carroActiu},{$set: {total: total3 }})
var cantidad2 = producteAdd.cantidad - unitats;
db.product.update({"nombre":nomProducte},{$set:{cantidad: cantidad2}});

// funcion añadir producto completa
// variables necesarias
var indexUser = db.usuario.findOne({"nombre": "Paco"});
var nomProducte = "HP Officejet Pro 6230 Impresora ePrint WiFi";
var unitats=2;
// en caso que no exista carroAcivo se crea
var original_id = ObjectId();// generamos una id nueva para un carro nuevo
db.basket.insert({"_id": original_id,"estado": "vacio","usuario":indexUser._id,"total": 0, "productos": [] });// creamos un carro con el id usuario
 db.usuario.update({"nombre": "Paco"},{$set:{"carroActiu": original_id}});// añdimos un carro 

var idCarro = original_id;
var producteAdd= db.product.findOne({"nombre":nomProducte});

if (producteAdd.cantidad > unitats){// si tenemos productos
    //Si tenemos descuento lo aplicamos
    var idPromocion= db.product.findOne({nombre:nomProducte});
    var promocionDescuento= db.promociones.findOne(idPromocion.promocion);
    var descuento = promocionDescuento.descuento;

    var aumento=producteAdd.precio * unitats;
    if (descuento){ aumento = aumento - ( aumento * ( descuento / 100)); }//Aplicamos descuento
    producteAdd.cantidad =- unitats;// descontamos productos en el stock
    db.basket.update({ _id:idCarro },{ $inc: { "total":aumento }});
//
    var carro = db.basket.findOne({ _id:idCarro });
/// Cambiamos estado del carro
    if( carro.estado === "vacio"){
        db.basket.update({ _id:carro._id },{ $set: { "estado":"cursando" }});//// Cambiamos estado de compra
    }
 
    if ( carro.productos != null) {
        db.basket.update( { "productos": { $elemMatch: {"productoId": producteAdd._id }}} ,{ $inc: { "productos.$.cantidad": unitats}}) 
}
else {
        db.basket.update({ _id:carro._id},{$push: {"productos": {"productoId": producteAdd._id, "cantidad": unitats}}})
    }

    db.product.update({"nombre": nomProducte},{$set: {cantidad: producteAdd.cantidad}});
} 
else {
    print("no hay stock del producto");
}

// 3. abandono del carrito sin comprar, 
var indexUser = db.usuario.findOne({"nombre": "Paco"},{_id:0,carroActiu:1});
db.basket.update({_id:indexUser.carroActiu},{$set:{"estado":"abandono"}});

// 4. salir del carro pagando
var indexUser = db.usuario.findOne({"nombre": "Paco"},{_id:1,carroActiu:1});
db.basket.update({_id:indexUser.carroActiu},{$set:{"estado":"pagado"}});
var basketActivo = db.basket.findOne({_id:indexUser.carroActiu});
db.usuario.update({_id:indexUser._id},{$push:{carros: {basketActivo}}})
db.usuario.update({_id:indexUser._id},{$push:{carros: {$each:[basketActivo.total, basketActivo.productos, basketActivo.estado]}}})



