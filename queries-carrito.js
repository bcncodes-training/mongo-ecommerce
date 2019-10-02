// DADES DE PROVA
db.carrito.insertMany([
    {
        _id: "C0001",
        id_usuari: "U0001",
        data: new Date(), // Q: Data de creació o data d'última actualització?
        productes: [
            { // NOTA: Per al "carrito" no guardem totes les dades d'un objecte de la col·lecció producte. Només aquelles necessàries per a les utilitats del "carrito"
                _id: "P0001",
                nom: "ProducteProva1",
                preu: 75.00,
                unitats: 3
            }
        ],
        estat: "pendent" // Si la clau estat no hi figura, es considera pendent. Estats possibles: ["pendent", "completat", "entregat"]
    }
    // Afegir aquí més carritos.
])

db.producte.insertMany([
   // Insertar productes aquí 
]);

db.usuari.insertMany([
    // insertar usuaris aquí
])

db.categoria.insertMany([
    // Insertar categories aquí
])

// DECLARAR VARIABLES
let addProductToCarrito, stockSuficient, eliminarProducteCarrito, anularCarrito, comprarCarrito, expirarCarritoPerDies;


// FUNCIONS DE LA BD (algunes funcions no tenen cos definit encara, però sí comentaris dels passos del procés que han de 
// seguir per a la seva utilitat)

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

/**
* Afegeix una entrada de producte donat al "carrito".
* Casuística:
* - Si el producte ja existeix al "carrito" donat, afegirà les unitats donades. En cas contrari, afegirà un nou objecte a la clau "productes".
* - El nombre d'unitats ha de ser superior a 0 i inferior al de unitats del producte donat en stock. En cas contrari, es llençarà un error.
* - El producte amb la ID donada ha d'existir a la col·lecció productes.
*/
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

        //* utilitzar una funció per a obtenir el producte per la ID: getProducteById(id_producte) 
    if (!producte) throw new Error (`Producte amb id ${id_producte} no existeix`);

    // Reduir stock
        // *utilitzar una funció reduirStockProducte(id_producte, unitats)

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

/**
* Elimina una entrada de producte del "carrito".
* Casuística:
* - Si el producte no existeix al carrito, no fa res.
* - Si el producte existeix al carrito, torna les unitats al stock del producte i després elimina el producte de la llista de productes.
* - Si s'ha realitzat una operació d'eliminació, es recalcularà el preu total del carrito.
*/
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
        // Utilitzar funcions de sumar a stock
    // Recalcular preu total del carrito
        // *Utilitzar la funció actualitzarPreuCarrito per a això
};

/**
* Anul·la un "carrito". Això elimina el carrito de la col·lecció.
* Casuística:
* - El carrito ha d'existir i no ha de tenir estat "completat" per a poder realitzar les operacions.
* - Per cada entrada de producte es realitza el procediment de eliminarProducteCarrito. Si el carrito és buit, aquest pas s'omet.
*     Veure mètode eliminarProducteCarrito per tal de comprovar els efectes.
* - El carrito és eliminat de la col·lecció, així com les referències d'usuari a aquest.
* No és necessari recalcular el preu total en cap cas d'aplicació d'aquest mètode.
*/
anularCarrito = (id_cart) => {
// NOTA: Partim de la decisió de eliminar de la BD els carritos anulats
    
    // si el carrito no té estat completat:
        // Eliminar tots els productes del carrito i actualitzar existències
            // *aplicar iterativament eliminarProducteCarrito() per a cada clau de producte

    // eliminar entrada carrito de la colecció
    
    // Eliminar valor "carrito" del usuari que estigui treballant amb aquest carrito
        // Q: Volem que els documents d'usuari tinguin referenciat un carrito?
}

/**
* Configura un carrito com a completat.
* Casuística:
* - El carrito ha d'existir i ha de tenir al menys una entrada de producte amb almenys una unitat per a poder-se comprar. 
*        Tanmateix, el preu total ha de ser superior a zero.
* - El carrito no pot trobar-se en estat "completat" ni en estat "entregat". En aquests casos, s'ignora.
* - Si el carrito compleix les condicions anteriors, quedarà bloquejat per a operacions de modificació posteriors.
* - Es desvincula al document usuari del carrito com a carrito actual. Això no bloqueja totalment el seu accés, 
*        però aquest es produirà per altres vies.
*/
comprarCarrito =  (id_cart) => {

    // canviar estat del carrito a completat

    // Desvinclar usuari de carrito (eliminant carrito del document usuari)
        // Q: Volem que els documents d'usuari tinguin referenciat un carrito?
}

/**
* Elimina carritos inactius. Un carrito es considera inactiu si la seva data és anterior a la data actual menys els dies donats.
* - Dies no pot ser negatiu. Si és zero, eliminarà tots els carritos no completats i no entregats.
* - 
*/
expirarCarritosPerDies = (dies) => {

    // Declarar data d'expiració en una variable (data actual - dies)
    
    // Eliminar tots els carritos amb estat pendent o sense estat que siguin anteriors a la data d'expiració
        // S'utilitzarà per a això un foreach, ja que volem aprofitar la funcionalitat del mètode anularCarrito
        // per a aplicar els efectes colaterals.
    
};
