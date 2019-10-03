db.carreto.insertMany([
    {
        _id: "C0001", // Construir amb objectID
        id_usuari: "U0001",
        data: new Date(), // L'última actualització
        productes: [
            { // NOTA: Per al "carreto" no guardem totes les dades d'un objecte de la col·lecció producte. Només aquelles necessàries per a les utilitats del "carreto"
                _id: "P0001",
                nom: "ProducteProva1",
                preu: 75.00,
                unitats: 3,
                descompte: 0.10
            }
        ],
        estat: "pendent", // Si la clau estat no hi figura, es considera pendent. Estats possibles: ["pendent", "completat", ("entregat")]
        preuTotal: 1
    }
    // Afegir aquí més carretons.
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
