// DECLARAR VARIABLES DE FUNCIONS
let afegirProducteAlCarreto, stockSuficient, eliminarProducteCarreto, anularCarreto, comprarCarreto, expirarcarretoPerDies, comprovaSiExisteixProducte, producteFinal, 
    creaNouProducte, editarDadesProducte, canviCategoriaDeProducte, retirarUnitatsProducteStock, afegirUnitatsProducteStock, baixaProducte, obtenirProductesPerNomCategoria, 
    filtrarCampsProducte, comprovaSiExisteixCategoriaNom, comprovaSiExisteixCategoriaId, crearNovaCategoria, editaCategoria, esborraCategoriaPerNom, obtenirFilCategoria, 
    obtenirDadesCategoriaNom, cercarProductesPerPreu, expirarCarretonsPerDies, actualitzarPreuCarreto, obtenirDadesProducte;

/**
 * Comprova si existeix una categoria amb un nom donat.
 * 
 * @param nomCategoria
 */
comprovaSiExisteixCategoriaNom = (nomCategoria) => {
	return (db.categories.find ({"nom" : nomCategoria}).count() > 0);
};

/**
 * Comprova si existeix una categoria amb un identificador donat.
 * 
 * @param idCategoria
 */
comprovaSiExisteixCategoriaId = (idCategoria) => {
	return (db.categories.find ({"_id" : idCategoria}).count() > 0);
};

/**
 * Crea una nova categoria.
 * 
 * En cas de que la categoria superior donada no existeixi, no l'afegirà
 * 
 * @param nomCategoria 
 * @param nomSuperior (Opcional) Nom categoria pare
 */
crearNovaCategoria = (nomCategoria, nomSuperior = '') => {
	let categoriaFinal = new Object();

	categoriaFinal.nom = nomCategoria;

	if (comprovaSiExisteixCategoriaNom(nomSuperior))
		categoriaFinal.superior = nomSuperior;

	db.categories.insert (categoriaFinal);
};

/**
 * Modifica la informació relativa a un document de categoria.
 * 
 * @param nomCategoria 
 * @param valorsCategoria Objecte que té com a claus els camps a modificar i com a valors els nous valors d'aquests camps.
 */
editaCategoria = (nomCategoria, valorsCategoria) => {
	if (comprovaSiExisteixCategoriaNom(nomCategoria)) {
		if (valorsCategoria.nom) {
			let nom = valorsCategoria.nom;

			if (!comprovaSiExisteixCategoriaNom(nom)) {
				db.categories.update ({"superior" : nomCategoria}, {"$set" : {"superior" : nom}}, {"multi":"true"});
				db.categories.update ({"nom": nomCategoria}, {"$set" : {"nom" : nom}});
			}
		}

		if (valorsCategoria.superior) {
			let superior = valorsCategoria.superior;

			if (comprovaSiExisteixCategoriaNom(superior)) {
                db.categories.update ({"nom" : nomCategoria}, {"$set" : {"superior" : superior}});
            } else {
                throw `No existeix categoria superior '${valorsCategoria.superior}'`;
            }
		} 
	}
};


/**
 * Obté un document complet de la categoria amb un nom donat.
 * 
 * @param nomCategoria
 */
obtenirDadesCategoriaNom = (nomCategoria) => {
	return db.categories.findOne ({"nom" : nomCategoria});
};



/**
 * Cerca tots els productes amb una categoria amb el nom donat.
 * 
 * @param nomCategoria
 */
obtenirProductesPerNomCategoria = (nomCategoria) => {
	if (comprovaSiExisteixCategoriaNom(nomCategoria)) {
		let categoria_id = obtenirDadesCategoriaNom (nomCategoria)._id;
		return db.productes.find ({"categoria_id": categoria_id});
	} else {
        throw 'Categoria no existeix';
    }
};

/**
 * Comprova si una categoria té productes associats
 * 
 * Tenir en compte que això no comprova les subcategories.
 */
comprovaSiCategoriaNomTeProductes = (nomCategoria) => {
    return obtenirProductesPerNomCategoria(nomCategoria).count() > 0;
}

/**
 * Elimina una categoria amb un nom donat.
 * 
 * Les subcategories de la categoria eliminada quedaran orfes.
 * 
 * @param nomCategoria
 */
esborraCategoriaPerNom = (nomCategoria) => {
	if (comprovaSiExisteixCategoriaNom(nomCategoria)) {

        if (comprovaSiCategoriaNomTeProductes(nomCategoria)) {
            throw `No es pot esborrar la categoria '${nomCategoria}': Té productes associats.`;
        }

		let superior = obtenirDadesCategoriaNom(nomCategoria).superior;

		if (superior) {
			db.categories.update ({
                "superior" : nomCategoria
            }, {
                "$set" : {
                    "superior" : superior
                }
            }, {
                "multi" : true
            });
        } else {
			db.categories.update ({
                
                "superior" : nomCategoria
            }, {
                $unset : {
                    "superior" : ""
                }
            }, {
                "multi" : true
            });
        }
		db.categories.remove ({"nom" : nomCategoria});
	} else {
        throw "OPERACIÓ D'ESBORRAT FALLIDA: La categoria indicada no existeix";
    }
};

/**
 * Crea i obté el fil d'Ariadna d'una categoria amb un nom donat.
 * 
 * @param nomCategoria
 */
obtenirFilCategoria = (nomCategoria) => {
	if (comprovaSiExisteixCategoriaNom(nomCategoria))
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


/**
 * Obté les dades d'un producte amb un codi donat
 * 
 * @param codiProducte
 * @return Dades del objecte document del producte o null si no existeix.
 */
obtenirDadesProducte = (codiProducte) => {
    return db.productes.findOne({
        _id: codiProducte
    });
};

/**
 * Comprova si un producte amb un codi donat existeix.
 *
 * @param codiProducte
 * @return True si el producte existeix a la col·lecció productes. Altrament, retorna false.
 */
comprovaSiExisteixProducte = (codiProducte) => {
	return (db.productes.find ({"_id" : codiProducte}).count() == 1);
};

/**
 * Formateja les dades d'entrada per tal d'encaixar l'objecte amb una estructura.
 * 
 * @param dades Dades d'entrada de producte
 * @return Dades del producte només amb els camps necessaris 
 */
filtrarCampsProducte = (dades) => {
    let producteDadesFinal = new Object();
    let llistaCamps = ["nom", "detalls", "fabricant", "dades", "preu", "stock"];
    llistaCamps.forEach((camp)=> {
        if (dades[camp] !== undefined) producteDadesFinal[camp] = dades[camp];
    });
    return producteDadesFinal;
};

/**
 * Afegeix un nou document de producte a la col·lecció.
 * 
 * @param codi Codi de producte
 * @param categoria Identificador de categoria del producte
 * @param dades Dades del producte
 * 
 */
creaNouProducte = (codi, categoria, dades) => {
	if (!comprovaSiExisteixProducte(codi)){
		if (comprovaSiExisteixCategoriaNom(categoria)){
			let producteFinal = filtrarCampsProducte (dades);

			producteFinal._id = codi;
			producteFinal.categoria_id = obtenirDadesCategoriaNom (categoria)._id;

			db.productes.insert (producteFinal);
		} else {
            throw `No s'ha pogut inserir el producte: Categoria no existeix`;
        }
	} else {
        throw `No s'ha pogut inserir el producte: Identificador de producte ja existeix`;
    }
};

/**
 * Edita les dades d'un producte donat.
 * 
 * @param codi Codi del producte a editar.
 * @param dades Camps a editar amb els nous valors.
 */
editarDadesProducte = (codi, dades) => {
	if (comprovaSiExisteixProducte (codi)) {
		let producteFinal = filtrarCampsProducte (dades);
		
		print (typeof (producteFinal.stock));
		
		db.productes.update ({"_id" : codi}, {"$set" : producteFinal});
	} else {
        throw `No s'ha pogut editar el producte: producte a editar no existeix`;
    }
};

/**
 * Edita la categoria d'un producte.
 * 
 * @param codiProducte 
 * @param idCategoria
 */
canviCategoriaDeProducte = (codiProducte, idCategoria) => {
	if (comprovaSiExisteixProducte(codiProducte) && existeixCategoria(idCategoria)) {
		db.productes.update ({"_id" : codiProducte}, {"$set" : {"categoria_id" : obtenirDadesCategoriaNom(idCategoria)._id}})
	} else {
        throw `No s'ha pogut editar la categoria del producte: producte i/o categoria no existeix`;
    }
};

/**
 * Retira de l'stock un nombre d'unitats d'un producte donat.
 * 
 * En cas de que no hi hagi unitats en stock suficients, genera un error.
 * 
 * @param codiProducte 
 * @param unitats
 */
retirarUnitatsProducteStock = (codiProducte, unitats) => {
	if (comprovaSiExisteixProducte (codiProducte)) {
		let stock_producte = db.productes.findOne ({"_id" : codiProducte}).stock;
		
		stock_producte -= Math.max(unitats, 0);
		
		if (stock_producte >= 0) {
			editarDadesProducte(codiProducte, {"stock" : stock_producte});
        } else {
            throw `No s'ha pogut modificar l'stock del producte: Unitats en stock insuficients`;
        }
    } else {
        throw `No s'ha pogut modificar l'stock del producte: producte no existeix`
    }
};

/**
 * Afegeix a l'stock un nombre d'unitats d'un producte donat
 * 
 * @param codiProducte
 * @param unitats
 */
afegirUnitatsProducteStock = (codiProducte, unitats) => {
	if (comprovaSiExisteixProducte (codiProducte)) {
		let stock_producte = db.productes.findOne ({"_id" : codiProducte}).stock;
		
		stock_producte += Math.max (unitats, 0);
		editarDadesProducte (codiProducte, {"stock" : stock_producte});
	}  else {
        throw `No s'ha pogut modificar l'stock del producte: producte no existeix`
    }
};

/**
 * Dóna de baixa un producte amb un codi donat.
 * 
 * El producte només es donarà de baixa si no té unitats en stock i no està 
 * associat a cap procés de compra pendent.
 * 
 * @param codiProducte
 */
baixaProducte = (codiProducte) => {
	if (comprovaSiExisteixProducte(codiProducte)) {

        if () {

        }


        db.productes.remove({"_id" : codiProducte});
	} else {
        throw `No s'ha pogut donar de baixa el producte: producte no existeix`;
    }
};

/**
 * Cerca tots els productes amb una categoria amb el ID donat.
 * 
 * @param id_categoria
 */
obtenirProductesPerIdCategoria = (id_categoria) => {
	if (existeixCategoria (id_categoria)) {
		return db.productes.find ({"categoria_id": id_categoria});
	}
};

/**
 * Cerca tots els productes en un interval de preu donat.
 * 
 * @param preuInferior 
 * @param preuSuperior  
 */
cercarProductesPerPreu = (preuInferior, preuSuperior) => {
	return db.productes.find ({"preu" : {"$gte" : preuInferior}, "preu" : {"$lte" : preuSuperior}});
};

/**
 * Actualitza el preu del carreto. 
 * S'aplica a qualsevol operació de modificació de productes.
 * 
 * @param idCarreto Identificador del carretó donat
 */
actualitzarPreuCarreto = (idCarreto) => {
    // Obtenir preu total
    let preuTotal = db.carretons.aggregate([
        {
            $match: { 
                "_id": idCarreto 
            }
        },
        {
            $group: {
                $_id: "$_id",
                preuTotal: {
                    $sum: "$productes.preu * $productes.unitats"
                }
            }
        }
    ]).preuTotal;
     // Fixar preu total al carreto corresponent
    db.carretons.update ({
        "_id": idCarreto
    }, {
        $set: {
            "preuTotal": preuTotal
        }
    });

};

/**
* Afegeix una entrada de producte donat al "carreto".
* Casuística:
* - Si el producte ja existeix al "carreto" donat, afegirà les unitats donades. En cas contrari, afegirà un nou objecte a la clau "productes".
* - El nombre d'unitats ha de ser superior a 0 i inferior al de unitats del producte donat en stock. En cas contrari, es llençarà un error.
* - El producte amb la ID donada ha d'existir a la col·lecció productes.
*/
afegirProducteAlCarreto = (id_cart, id_producte, unitats) => {
    // Comprovar si les unitats són correctes o no deixarien stock negatiu.
    if (unitats <= 0) {
        throw new Error(`El nombre d'unitats demandades ha de ser positiu`);
    } else if (!stockSuficient(id_producte, unitats)) {
        throw new Error(`no hi ha suficients unitats del producte ${id_producte} en stock`);
    }
    // Comprovar si producte existeix.
    let producte = obtenirDadesProducte(id_producte);
        //* utilitzar una funció per a obtenir el producte per la ID: getProducteById(id_producte) 
    if (!producte) {
        throw new Error(`Producte amb id ${id_producte} no existeix`);
    };

    // Reduir stock
    retirarUnitatsProducteStock(id_producte, unitats);

    // Comprovem si el producte a introduir al carreto ja ha sigut introduit
    if (db.carretons.findOne({"_id": id_cart, "productes._id": id_producte })) {
        // En cas afirmatiu, sumar les unitats.

        db.carretons.update({
            "_id": id_cart,
            "productes._id": id_producte
        }, {
            $inc: {
                "productes.$.unitats": unitats
            }
        });

    } else {
        // En cas contrari, crear entrada.

        db.carretons.update({
            "_id": id_cart,
            "productes._id": id_producte
        }, {
            $push: {
                "productes": {
                    "_id": producte.id,
                    "nom": producte.nom,
                    "preu": producte.preu,
                    "unitats": producte.unitats
                }
            }
        });

    }

    actualitzarPreuCarreto(id_cart);
};

/**
 * 
 */
comprovaSiAlgunCarretoActiuConteProducte = (id_producte) => {
    return db.carretons.find({
        $or: [
            {
                estat: {
                    $exists: false
                }
            },
            {
                estat: "pendent"
            }
        ],
        productes: { 
            $elemMatch: { 
                "_id": id_producte 
            } 
        } 
    }).count() > 0;
};

/**
 * Comprova si existeix un carretó amb una id donada
 * 
 * @param id_cart Id del carretó
 */
comprovaSiExisteixCarreto = (id_cart) => {
    return db.carretons.find({
        "_id": id_cart
    }).count() > 0;
}; 

/**
 * Comprova si un carreto conte un producte en concret
 * 
 * @param id_cart
 * @param id_producte
 */
comprovaSiCarretoConteProducte = (id_cart, id_producte) => {
    return db.carretons.find({
        _id: id_cart,
        productes: {
            $elemMatch: {
                $eq: id_producte
            }
        }
    }).count() > 0;
};

/**
 * 
 */
obtenirProductesCarreto = (id_cart) => {
    return db.productes.findOne({
        "_id": id_cart
    }).productes;
};

/**
 * 
 */
obtenirUnitatsDeProducteACarreto = (id_cart, id_producte) => {
    return db.productes.findOne({
        "_id": id_cart,

    }, {
        "_id": 0, 
        "unitats": {
            $elemMatch: {
                "_id": id_producte
            }
        }
    }).unitats;
}

/**
* Elimina una entrada de producte del "carreto".
* Casuística:
* - Si el producte no existeix al carreto, no fa res.
* - Si el producte existeix al carreto, torna les unitats al stock del producte i després elimina el producte de la llista de productes.
* - Si s'ha realitzat una operació d'eliminació, es recalcularà el preu total del carreto.
* 
* @param id_cart
* @param id_producte
*/
eliminarProducteCarreto = (id_cart, id_producte) =>  {

    if (!comprovaSiExisteixProducte(id_producte) || comprovaSiExisteixCarreto(id_cart)) {
        throw new Error("Carretó o producte especificats no existeixen");
    } else if (!comprovaSiCarretoConteProducte(id_cart, id_producte)) {
        throw new Error(`Producte amb id="${id_producte}" no existeix al carretó`);
    }


    //  Obtenir les unitats al carreto del producte a eliminar (let unitats)
    let unitats = obtenirUnitatsDeProducteACarreto(id_cart, id_producte);

    // Eliminar entrada del producte del carreto:
    db.carretons.update({
        "_id": id_cart
    }, {
        $pull: {
            "productes": {
                _id: id_producte
            }
        }
    });

    // Afegir unitats del producte al stock
    afegirUnitatsProducteStock(id_producte, unitats);
    // Recalcular preu total del carreto
    actualitzarPreuCarreto(id_cart);
};

/**
* Anul·la un "carreto". Això elimina el carreto de la col·lecció.
* Casuística:
* - El carreto ha d'existir i no ha de tenir estat "completat" per a poder realitzar les operacions.
* - Per cada entrada de producte es realitza el procediment de eliminarProductecarreto. Si el carreto és buit, aquest pas s'omet.
*     Veure mètode eliminarProductecarreto per tal de comprovar els efectes.
* - El carreto és eliminat de la col·lecció, així com les referències d'usuari a aquest.
* No és necessari recalcular el preu total en cap cas d'aplicació d'aquest mètode.
*/
anularCarreto = (id_cart) => {
// NOTA: Partim de la decisió de eliminar de la BD els carretons anulats
    if (!comprovaSiExisteixCarreto(id_cart)) {
        throw new Error(`El carretó amb id="${id_cart}" no existeix.`);
    } else if (comprovaSiCarretoCompletat(id_cart)) {
        throw new Error(`No es pot anul·lar el carretó amb id="${id_cart}": comanda completada`);
    }

    obtenirProductesCarreto(id_cart).forEach((producte) => {
        // NOTA: L'aplicació de l'eliminació amb aquest mètode comporta poder recuperar les existències d'stock dels productes.
        try {
            eliminarProducteCarreto(id_cart, producte._id);
        } catch (e) {}
    });
    
    // eliminar entrada carreto de la colecció
    db.carretons.remove({
        _id: id_cart
    });
}

/**
 * Comprova si un carretó donat ja està comprat.
 * 
 * Si el carretó no existeix, llença un error.
 * 
 * @param idCarreto
 * 
 * @return True si el carretó donat està en estat "completat", en cas contrari, false. 
 */
comprovaSiCarretoCompletat = (idCarreto) =>  {
    if (!comprovaSiExisteixCarreto(idCarreto)) {
        throw new Error(`El carretó amb id="${idCarreto}" no existeix.`);
    }

    return db.carretons.find({
        _id: idCarreto,
        estat: "completat" 
    }).count() > 0;
};

/**
* Configura un carreto com a completat.
* Casuística:
* - Si el carretó ja està completat, llença error.
* - El carreto ha d'existir i ha de tenir al menys una entrada de producte amb almenys una unitat per a poder-se comprar. 
*        Tanmateix, el preu total ha de ser superior a zero.
*/
comprarCarreto =  (id_cart) => {

    if (comprovaSiCarretoCompletat(id_cart)) {
        throw new Error(`El carretó amb id="${id_cart}" ja estava comprat.`);
    }

    db.carretons.update({
        _id: id_cart,
        $and: [
            {
                preuTotal: {
                    $exists: true   
                },
            },
            {
                preuTotal: {
                    $gt: 0
                }
            }
        ]
    }, {
        $set: {
            estat: "completat"
        }
    });

}

/**
* Elimina carretons inactius. Un carreto es considera inactiu si la seva data és anterior a la data actual menys els dies donats.
* - Dies no pot ser negatiu. Si és zero, eliminarà tots els carretons no completats i no entregats.
* - 
*/
expirarCarretonsPerDies = (dies) => {

    const dataExpiracio = (new Date()) - dies;

    db.carretons.find({
        $or: [
            {
                estat: {
                    $exists: false
                }
            },
            {
                estat: "pendent"
            }
        ],
        data: {
            $lt: dataExpiracio
        }
    }).forEach((carreto) => {
        anularCarreto(carreto._id);
    });
};

/**
 * Obté el carretó actual del usuari
 * 
 * @param idUsuari Identificador del usuari
 * @return Document del carretó actual del usuari o null si no existeix.
 */
obtenirCarretoActiuUsuari = (idUsuari) => {

    return db.carretons.findOne({
        "id_usuari": idUsuari,
        $or: [
            {
                "estat": "pendent"
            },
            {
                "estat": {
                    $exists: false
                }
            }
        ]
    });

};

/**
 * Creem els índexs a les col·leccions categories i productes
 */
 
 db.categories.createIndex ({"_id":1, "nom":1, "superior":1});
 db.productes.createIndex ({"_id":1, "categoria_id":1, "preu":1});
