/*

db.categories.insertMany ([
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
]);

*/

let existeixCategoria, novaCategoria, editaCategoria, esborraCategoria, filCategoria, dadesCategoria;

existeixCategoria = (nomCategoria) => {
	return (db.categories.find ({"nom" : nomCategoria}).count() > 0);
};

novaCategoria = (categoria, superior) => {
	let categoriaFinal = new Object();

	categoriaFinal.nom = categoria;

	if (existeixCategoria (superior))
		categoriaFinal.superior = superior;

	db.categories.insert (categoriaFinal);
};

editaCategoria = (nomCategoria, valorsCategoria) => {
	if (existeixCategoria (nomCategoria)) {
		if (valorsCategoria.nom) {
			let nom = valorsCategoria.nom;

			if (!existeixCategoria (nom)) {
				db.categories.update ({"superior" : nomCategoria}, {"$set" : {"superior" : nom}}, {"multi":"true"});
				db.categories.update ({"nom": nomCategoria}, {"$set" : {"nom" : nom}});
			}
		}

		if (valorsCategoria.superior) {
			let superior = valorsCategoria.superior;

			if (existeixCategoria (superior))
				db.categories.update ({"nom" : nomCategoria}, {"$set" : {"superior" : superior}});
		}
	}
};

esborraCategoria = (nomCategoria) => {
	if (existeixCategoria (nomCategoria)) {
		let superior = dadesCategoria (nomCategoria).superior;

		if (superior)
			db.categories.update ({"superior" : nomCategoria}, {"$set" : {"superior" : superior}}, {"multi" : true});
		else
			db.categories.update ({"superior" : nomCategoria}, {"$unset" : {"superior" : ""}}, {"multi" : true});

		db.categories.remove ({"nom" : nomCategoria});
	}
};

filCategoria = (nomCategoria) => {
	if (existeixCategoria (nomCategoria))
	{
		let fil = [nomCategoria];

		let infoCategoria = db.categories.findOne ({"nom" : nomCategoria});
		while (infoCategoria.superior && infoCategoria.superior != "") {
			fil.unshift (infoCategoria.superior);
			infoCategoria = db.categories.findOne ({"nom" : infoCategoria.superior});
		}

		return tojson (fil);
	}
};

dadesCategoria = (nomCategoria) => {
	return db.categories.findOne ({"nom" : nomCategoria});
};

/*
 *
 */

let existeixProducte, producteFinal, nouProducte, editaProducte, canviCategoria, vendesProducte, compresProducte, baixaProducte, productesCategoria;

existeixProducte = (codi) => {
	return (db.productes.find ({"_id" : codi}).count() == 1);
};

producteDades = (dades) => {
	let producteDadesFinal = new Object();
	
	if (dades.nom)			producteDadesFinal.nom = dades.nom;
	if (dades.detalls) 		producteDadesFinal.detalls = dades.detalls;
	if (dades.fabricant) 	producteDadesFinal.fabricant = dades.fabricant;	
	if (dades.dades) 		producteDadesFinal.dades = dades.dades;
	
	producteDadesFinal.preu = (dades.preu) ? dades.preu : 0;
	producteDadesFinal.stock = (dades.stock) ? dades.stock : 0;
	
	return producteDadesFinal;
};

nouProducte = (codi, categoria, dades) => {
	if (!existeixProducte (codi)){
		if (existeixCategoria (categoria)){
			let producteFinal = producteDades (dades);

			producteFinal._id = codi;
			producteFinal.categoria_id = dadesCategoria (categoria)._id;

			db.productes.insert (producteFinal);
		}
	}
};

editaProducte = (codi, dades) => {
	if (existeixProducte (codi)) {
		let producteFinal = producteDades (dades);
		
		print (typeof (producteFinal.stock));
		
		db.productes.update ({"_id" : codi}, {"$set" : producteFinal});
	}
};

canviCategoria = (codi, categoria) => {
	if (existeixProducte (codi) && existeixCategoria (categoria)) {
		db.productes.update ({"_id" : codi}, {"$set" : {"categoria_id" : dadesCategoria(categoria)._id}})
	}
};

vendesProducte = (codi, vendes) => {
	if (existeixProducte (codi)) {
		let stock_producte = db.productes.findOne ({"_id" : codi}).stock;
		
		stock_producte -= Math.max (vendes, 0);
		
		print (stock_producte);
		
		if (stock_producte >= 0)
			editaProducte (codi, {"stock" : stock_producte});
		else
			throw new Error ("Unitats en stock insuficients");
	}
};

compresProducte = (codi, compres) => {
	if (existeixProducte (codi)) {
		let stock_producte = db.productes.findOne ({"_id" : codi}).stock;
		
		stock_producte += Math.max (compres, 0);
		editaProducte (codi, {"stock" : stock_producte});
	}
};

baixaProducte = (codi) => {
	if (existeixProducte (codi)) {
		let stock = db.productes.find ({"_id" : codi}).stock;

		if (!stock)
			db.productes.remove ({"_id" : codi});
	}
};

productesCategoria = (nomCategoria) => {
	if (existeixCategoria (nomCategoria)) {
		let categoria_id = dadesCategoria (nomCategoria)._id;
		return db.productes.find ({"categoria_id": categoria_id});
	}
};

/*
let cercaPreusProducte;

cercaPreusProducte = (preuInf, PreuSup) => {
	db.productes.find
};
*/
