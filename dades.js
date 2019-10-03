db.categories.insertMany([
	{"nom":"Teclats"},
	{"nom":"Pianos", "superior":"Teclats"},
	{"nom":"Acordions", "superior":"Teclats"},
	{"nom":"Corda"},
	{"nom":"Guitarres", "superior":"Corda"},
	{"nom":"Arc", "superior":"Corda"},
	{"nom":"Arpes", "superior":"Corda"},
	{"nom":"Vent"},
	{"nom":"Vent Fusta", "superior":"Vent"},
	{"nom":"Vent Metall", "superior":"Vent"},
	{"nom":"Percussió"}
])

db.productes.insertMany([
   // Insertar productes aquí 
]);

db.usuari.insertMany([
    // insertar usuaris aquí
])


/*

db.categories = {
	_id : ObjectId,
	nom : nomCategoria,
	superior : nomCategoriaSuperior
}

db.productes = {
	_id : codi,
	nom : nomProducte,
	categoria_id : ObjectId,
	detalls : detallsProducte, // string descripció
	fabricant : fabricantProducte,
	preu : preuProducte,
	stock : stockProducte,
	dades : Object
}


db.carreto.insertMany([
    {
        _id: (ObjectID()),
        id_usuari: "",
        data: new Date(), // L'última actualització
        productes: [
            { // NOTA: Per al "carreto" no guardem totes les dades d'un objecte de la col·lecció producte. Només aquelles necessàries per a les utilitats del "carreto"
                _id: codi, // Id del producte
                nom: "ProducteProva1",
                preu: 75.00,
                unitats: 3
            }
        ],
        estat: "pendent", // Si la clau estat no hi figura, es considera pendent. Estats possibles: ["pendent", "completat"]
        preuTotal: 1
    }
    // Afegir aquí més carretons.
])
*/
