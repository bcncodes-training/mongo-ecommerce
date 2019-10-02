// DADES DE PROVA
db.carrito.insertMany([
    {
        _id: "C0001",
        id_usuari: "U0001",
        data: new Date(), // Q: Data de creació o data d'última actualització?
        productes: [
            {
                _id: "P0001",
                nom: "ProducteProva1",
                preu: 75.00,
                unitats: 3
            }
        ] 
    }
])

// DECLARAR VARIABLES
let addProductToCarrito, stockSuficient, eliminarProducteCarrito, anularCarrito, comprarCarrito;

/**
 * Actualitza el preu del carrito. 
 * 
 * S'aplica a qualsevol operació de modificació de productes.
 * 
 * (S'espera que apliqui també descomptes en els productes).
 */
actualitzarPreuCarrito = (id_cart) => {

    // Crear subcol·lecció carrito-preuTotal
    db.carrito.aggregate([
        {
            $group: {
                $_id: "$_id",
                preuTotal: {
                    $sum: "$productes.preu * $productes.unitats"
                }
            }
        },
        {
            $out: "cartTotals"
        }
    ]);

    // Obtenir de la nova col·lecció el preu total
    let {preuTotal} =  db.cartTotals.findOne({
        "_id": id_cart
    });

    // Fixar preu total al carrito corresponent
    db.carrito.update ({
        "_id": id_cart
    }, {
        $set: {
            "preuTotal": preuTotal
        }
    });

};

addProductToCarrito = (id_cart, id_producte, unitats) => {

    // Comprovar si les unitats són correctes o no deixarien stock negatiu.
    if (unitats <= 0) {
        throw new Error(`El nombre d'unitats demandades ha de ser positiu`);
    } else if (!stockSuficient(id_producte, unitats)) {
        throw new Error(`no hi ha suficients unitats del producte ${id_producte} en stock`);
    }

    // Comprovar si producte existeix.
    // De totes formes, hem d'obtenir la informació del producte,
    // ja que el necessitarem

    // let producte = getProducteById(id_producte) 
    if (!producte) throw new Error (`Producte amb id ${id_producte} no existeix`);


    // Reduir stock
    // reduirStockProducte(id_producte, unitats)

    // Comprovem si el producte a introduir al carrito ja ha sigut introduit
    if (db.carrito.findOne({"_id": id_cart, "productes._id": id_producte })) {
        // En cas afirmatiu, sumar les unitats.

        db.carrito.update({
            "_id": id_cart,
            "productes._id": id_producte
        }, {
            $inc: {
                "productes.$.unitats": unitats
            }
        });

    } else {
        // En cas contrari, crear entrada.

        db.carrito.update({
            "_id": id_cart,
            "productes._id": id_producte
        }, {
            $push: {
                "productes": {
                    "_id": producte.id,
                    "nom": producte.nom,
                    "preu": producte.preu,
                    "unitats": producte.unitats
                    // descompte: producte.descompte (TODO)
                }
            }
        });

    }

    actualitzarPreuCarrito(id_cart);
}

eliminarProducteCarrito = (id_cart, id_producte) =>  {

    // Comprovar que producte i carrito existeixen 
        // Si no és així, sortir

    //  Obtenir les unitats al carrito del producte a eliminar (let unitats)

    // Eliminar entrada del producte del carrito: 
    /* Basar-se en aquesta estructura de consulta
    
        collection.update(
            { _id: id },
            { $pull: { 'contact.phone': { number: '+1786543589455' } } }
        );
    */

    // Afegir unitats del producte al stock

    // Recalcular preu total del carrito

};

anularCarrito = (id_cart) => {
// NOTA: Partim de la decisió de eliminar de la BD els carritos anulats
    
    // si el carrito no té estat completat:
        // Eliminar tots els productes del carrito i actualitzar existències
            // *aplicar recursivament eliminarProducteCarrito()

    // eliminar entrada carrito de la colecció
    
}

comprarCarrito =  (id_cart) => {

    // canviar estat del carrito a completat

}

