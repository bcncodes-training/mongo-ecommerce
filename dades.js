db.categories.insertMany([
	{"_id":"TC0", "nom":"Teclats"},
	{"_id":"TC1", "nom":"Pianos", "superior":"Teclats"},
	{"_id":"TC2", "nom":"Acordions", "superior":"Teclats"},
	{"_id":"CD0", "nom":"Corda"},
	{"_id":"CD1", "nom":"Guitarres", "superior":"Corda"},
	{"_id":"CD2", "nom":"Arc", "superior":"Corda"},
	{"_id":"CD3", "nom":"Arpes", "superior":"Corda"},
	{"_id":"VT0", "nom":"Vent"},
	{"_id":"VT1", "nom":"Vent Fusta", "superior":"Vent"},
	{"_id":"VT2", "nom":"Vent Metall", "superior":"Vent"},
	{"_id":"PR0", "nom":"Percussió"}
])

db.productes.insertMany([
	{"_id":"TC001", "nom":"Piano 1", 
		"detalls": "Sint nostrud officia ea officia non ullamco non labore ullamco incididunt nisi. Ad commodo ea adipisicing cupidatat dolore officia duis aute exercitation duis consectetur et. Eiusmod mollit duis incididunt irure aliqua aliquip laborum eu id aliqua elit. Consequat nisi pariatur anim veniam enim culpa.\r\n",
		"categoria_id":"TC1", "fabricant":"Fabricant 1", "preu":2950, "stock": 5, "dades":{"tipus":"paret", "color":"negre"}},
	{"_id":"TC002", "nom":"Piano 2", 
		"detalls": "Et ea ut exercitation commodo est irure exercitation anim laboris qui exercitation. Sit eu aliqua quis cupidatat esse laborum est esse adipisicing ullamco fugiat enim duis. Et ex ipsum dolore ea voluptate et pariatur qui nulla irure do excepteur in. Nisi minim voluptate ut do occaecat occaecat ad velit aute voluptate ullamco ad.\r\n",
		"categoria_id":"TC1", "fabricant":"Fabricant 1", "preu":2950, "stock": 2, "dades":{"tipus":"paret", "color":"blanc"}},
	{"_id":"TC003", "nom":"Piano 3", 
		"detalls": "Tempor mollit aliquip incididunt aliquip enim veniam in duis id velit sint excepteur. Et duis nostrud ex fugiat. Aliqua ut sit voluptate nulla adipisicing sit irure ullamco deserunt Lorem. Proident cillum incididunt aliquip est occaecat pariatur adipisicing.\r\n",
		"categoria_id":"TC1", "fabricant":"Fabricant 2", "preu":3150, "stock": 3, "dades":{"tipus":"paret", "color":"negre"}},
	{"_id":"TC004", "nom":"Piano 4", 
		"detalls": "Ut sit amet qui fugiat occaecat dolor magna. Laboris sunt fugiat ea ut ut commodo ullamco ullamco duis anim ipsum est est sint. Excepteur et dolore pariatur reprehenderit anim enim sint mollit aliqua minim. Dolor ea in minim amet mollit cillum eiusmod. Cupidatat Lorem pariatur ut commodo officia exercitation.\r\n",
		"categoria_id":"TC1", "fabricant":"Fabricant 2", "preu":3275, "stock": 3, "dades":{"tipus":"paret", "color":"negre"}},
	{"_id":"TC005", "nom":"Piano 5", 
		"detalls": "Occaecat culpa elit aliqua consequat ipsum culpa aute ea ea ad est laborum dolor. Deserunt ipsum exercitation fugiat id ipsum ea est. Cupidatat labore aute adipisicing eiusmod proident ea ullamco sit do incididunt excepteur. Incididunt ipsum nostrud excepteur sit sit aliqua nisi ex officia labore enim. Amet sint incididunt duis adipisicing nisi tempor et Lorem ea aliqua esse esse.\r\n",
		"categoria_id":"TC1", "fabricant":"Fabricant 3", "preu":178000, "stock": 1, "dades":{"tipus":"cua", "color":"negre"}},
	{"_id":"TC006", "nom":"Acordió 1", 
		"detalls": "Culpa commodo eiusmod proident amet cillum deserunt enim anim laborum ex mollit culpa. Culpa elit nostrud laboris Lorem qui incididunt excepteur nulla voluptate. Ipsum et eu ex nisi qui esse dolor. Sit voluptate irure do voluptate anim exercitation. Culpa do cupidatat in non veniam labore reprehenderit esse ad occaecat irure ex nostrud.\r\n",
		"categoria_id":"TC2", "fabricant":"Fabricant 4", "preu":750, "stock": 5, "dades":{"tipus":"diatònic"}},
	{"_id":"TC007", "nom":"Acordió 2", 
		"detalls": "Fugiat consequat laborum elit consequat aliqua quis. Officia sint anim irure cillum elit ex amet ea. Incididunt consequat est anim eiusmod aliquip. Dolore cupidatat laboris dolor elit minim. Eiusmod voluptate aliqua amet irure dolore laborum exercitation quis amet laborum mollit ipsum magna. Commodo mollit id dolore aliquip laboris consequat minim.\r\n",
		"categoria_id":"TC2", "fabricant":"Fabricant 4", "preu":775, "stock": 5, "dades":{"tipus":"diatònic"}},
	{"_id":"TC008", "nom":"Acordió 3", 
		"detalls": "Dolor duis laborum aliquip eiusmod. Reprehenderit deserunt mollit Lorem nostrud incididunt aliqua qui occaecat consectetur Lorem irure occaecat. Dolore ullamco mollit duis laboris eu ut qui deserunt irure. Tempor do nostrud proident cupidatat. Ex nulla enim adipisicing dolor ut culpa elit et dolor proident Lorem. Et consequat tempor aute Lorem labore aliqua dolore veniam velit non officia qui occaecat do.\r\n",
		"categoria_id":"TC2", "fabricant":"Fabricant 5", "preu":810, "stock": 5, "dades":{"tipus":"diatònic"}},
	{"_id":"CD001", "nom":"Guitarra 1", 
		"detalls": "Nulla ad et consequat aliqua occaecat culpa in incididunt aliquip. Lorem est ea adipisicing amet in aliquip amet ad. Consectetur dolore aute velit ullamco nisi pariatur ad pariatur elit voluptate enim occaecat. Sunt cillum nostrud duis ad. Fugiat est fugiat excepteur ullamco nulla duis fugiat nulla eu ipsum est culpa elit.\r\n",
		"categoria_id":"CD1", "fabricant":"Fabricant 6", "preu":175, "stock": 15, "dades":{"tipus":"espanyola"}},
	{"_id":"CD002", "nom":"Guitarra 2", 
		"detalls": "Aliquip ut sint tempor ipsum nulla dolore velit officia Lorem veniam qui. Occaecat quis non dolor nisi proident. Exercitation deserunt aliquip ipsum aute do. Deserunt excepteur elit anim commodo elit. Deserunt in tempor cupidatat consectetur.\r\n",
		"categoria_id":"CD1", "fabricant":"Fabricant 7", "preu":190, "stock": 10, "dades":{"tipus":"espanyola"}},
	{"_id":"CD003", "nom":"Guitarra 3", 
		"detalls": "Occaecat amet enim commodo eiusmod ad eu aute adipisicing. In consectetur ipsum ea non nostrud. Aliqua laborum irure enim non mollit eu dolor duis. Ipsum dolore ad non non ad aute. Velit eu ipsum excepteur qui cupidatat labore cupidatat.\r\n",
		"categoria_id":"CD1", "fabricant":"Fabricant 7", "preu":210, "stock": 10, "dades":{"tipus":"espanyola"}},
	{"_id":"CD004", "nom":"Violí 1", 
		"detalls": "Laboris laborum officia exercitation duis in. Adipisicing dolor esse ex occaecat eiusmod officia laboris magna culpa. Minim consectetur in elit eiusmod ad quis dolor adipisicing laborum Lorem do aliquip ea.\r\n",
		"categoria_id":"CD2", "fabricant":"Fabricant 8", "preu":10175, "stock": 5},
	{"_id":"CD005", "nom":"Violí 2", 
		"detalls": "Veniam elit in minim tempor veniam fugiat irure ipsum do eiusmod ullamco. Excepteur pariatur labore ut excepteur amet exercitation proident deserunt enim esse velit anim deserunt velit. Aliqua eu magna culpa velit esse sit magna veniam id velit cillum aliquip proident.\r\n",
		"categoria_id":"CD2", "fabricant":"Fabricant 8", "preu":11190, "stock": 4},
	{"_id":"CD006", "nom":"Viola 1", 
		"detalls": "Lorem sit aute cillum cupidatat cupidatat fugiat ad veniam consectetur. Sint est voluptate mollit qui deserunt consequat pariatur. Occaecat pariatur excepteur id magna id aute culpa sunt laboris duis laborum non sunt veniam. Consequat voluptate qui mollit nostrud occaecat in nostrud cillum dolor veniam mollit. Sint excepteur est cillum sunt ullamco commodo exercitation magna in eiusmod do nulla aliqua. Sint irure non eu non pariatur magna officia.\r\n",
		"categoria_id":"CD2", "fabricant":"Fabricant 8", "preu":11210, "stock": 5},
	{"_id":"CD007", "nom":"Viol·loncel 1", 
		"detalls": "Pariatur culpa et officia occaecat duis esse est proident laboris ullamco sit exercitation. Pariatur eiusmod adipisicing et ipsum esse adipisicing excepteur dolor. Nulla ad tempor Lorem ad mollit ipsum minim tempor ad mollit sit nulla officia aliquip.\r\n",
		"categoria_id":"CD2", "fabricant":"Fabricant 8", "preu":12000, "stock": 4},
	{"_id":"CD008", "nom":"Viol·loncel 2", 
		"detalls": "Laborum dolor culpa aute adipisicing exercitation eiusmod. Mollit adipisicing sit aliquip commodo nisi voluptate deserunt non dolor duis anim duis do. Mollit magna est sint commodo nisi laborum qui. Sunt anim dolore commodo dolore. Cupidatat exercitation est dolor adipisicing commodo ut ullamco excepteur consequat pariatur.\r\n",
		"categoria_id":"CD2", "fabricant":"Fabricant 9", "preu":12010, "stock": 4},
	{"_id":"CD009", "nom":"Viol·loncel 3", 
		"detalls": "Nisi ea nulla veniam aliqua. Laborum voluptate commodo nulla incididunt nisi exercitation dolore velit exercitation sint est sunt. Dolore veniam non dolore aliqua et. Ea veniam commodo anim tempor amet pariatur et ea anim voluptate quis cupidatat ut. Deserunt occaecat mollit amet nulla dolor commodo in laboris commodo irure enim ex amet. Laboris minim magna ullamco duis est laborum in.\r\n",
		"categoria_id":"CD2", "fabricant":"Fabricant 9", "preu":13100, "stock": 2},
	{"_id":"CD010", "nom":"Arpa 1", 
		"detalls": "Culpa cillum quis nostrud labore id. Cillum incididunt officia nisi quis nulla nostrud. Ut ut cillum incididunt incididunt.\r\n",
		"categoria_id":"CD3", "fabricant":"Fabricant 1", "preu":6780, "stock": 3},
	{"_id":"CD011", "nom":"Arpa 2", 
		"detalls": "Consequat est qui duis duis tempor qui. Laborum in occaecat dolor sit. Est nostrud duis veniam aute tempor consectetur occaecat ea laboris in cillum in. Non irure consequat culpa est do Lorem ullamco nisi ad.\r\n",
		"categoria_id":"CD3", "fabricant":"Fabricant 10", "preu":7450, "stock": 2},
	{"_id":"VT001", "nom":"Flauta 1", 
		"detalls": "Consequat mollit est pariatur nulla adipisicing ea non. Ullamco ad amet minim deserunt aliquip deserunt ex. Dolore incididunt et nulla elit minim laboris veniam adipisicing esse occaecat velit. Deserunt pariatur pariatur nulla cupidatat laborum. Incididunt velit occaecat eiusmod sit do nostrud reprehenderit officia magna incididunt reprehenderit.\r\n",
		"categoria_id":"VT1", "fabricant":"Fabricant 11", "preu":30, "stock": 20},
	{"_id":"VT002", "nom":"Flauta 2", 
		"detalls": "Qui id laboris officia cupidatat tempor nulla eu commodo commodo nulla minim. Reprehenderit minim sit qui officia nostrud qui fugiat. Labore ipsum proident elit laborum esse excepteur. Anim nostrud ut laborum voluptate reprehenderit et. Cillum eiusmod consequat dolore id et nisi quis occaecat cupidatat et pariatur nisi.\r\n",
		"categoria_id":"VT1", "fabricant":"Fabricant 11", "preu":32, "stock": 20},
	{"_id":"VT003", "nom":"Clarinet 1", 
		"detalls": "Ad mollit excepteur laborum quis sunt aliquip sunt. Dolor proident sint ullamco pariatur proident fugiat. Commodo exercitation proident minim Lorem minim laboris in minim.\r\n",
		"categoria_id":"VT1", "fabricant":"Fabricant 12", "preu":2200, "stock": 5,"dades":{"tonalitat":"Eb"}},
	{"_id":"VT004", "nom":"Clarinet 2", 
		"detalls": "Laboris aliqua laborum nulla duis laboris. Lorem duis cupidatat sint eiusmod cupidatat et consectetur sint Lorem voluptate exercitation non. Ea occaecat commodo dolor voluptate.\r\n",
		"categoria_id":"VT1", "fabricant":"Fabricant 12", "preu":2220, "stock": 5,"dades":{"tonalitat":"Bb"}},
	{"_id":"VT005", "nom":"Trompeta 1", 
		"detalls": "Aute Lorem in do deserunt do exercitation est ad est eiusmod non anim. Commodo ipsum qui excepteur esse aute nostrud labore eiusmod dolor do qui id aliquip. Enim aliquip duis occaecat cillum culpa ad. Magna quis incididunt non dolor eiusmod deserunt voluptate mollit eiusmod eu sit voluptate minim.\r\n",
		"categoria_id":"VT2", "fabricant":"Fabricant 13", "preu":2210, "stock": 7},
	{"_id":"VT006", "nom":"Trombó 1", 
		"detalls": "Voluptate consequat deserunt esse deserunt duis nisi aute in veniam tempor mollit nulla dolor. Officia dolor ea ipsum ex dolore ea irure culpa officia anim enim duis sunt. Ad aliqua commodo duis aliquip proident sit eu ea. Ad deserunt officia eu eiusmod ea mollit ullamco duis ex proident. Anim pariatur excepteur excepteur velit. Ipsum eiusmod in nostrud officia aute excepteur esse irure non anim Lorem. Amet qui non dolor enim proident veniam culpa exercitation cillum dolore qui nisi occaecat.\r\n",
		"categoria_id":"VT2", "fabricant":"Fabricant 13", "preu":2210, "stock": 5},
	{"_id":"VT007", "nom":"Trompa 1", 
		"detalls": "Non ullamco proident sunt id. Tempor culpa culpa tempor ut fugiat dolore consectetur. Culpa sit consectetur reprehenderit velit non. Culpa voluptate do consequat id qui anim eu laborum labore reprehenderit labore laboris.\r\n",
		"categoria_id":"VT2", "fabricant":"Fabricant 13", "preu":2210, "stock": 3},
	{"_id":"VT008", "nom":"Tuba 1", 
		"detalls": "Minim incididunt fugiat excepteur in ut ut duis proident et laborum. Est ad nulla aliqua quis. Proident commodo magna velit dolore consequat qui eu labore fugiat nostrud ad incididunt enim anim.\r\n",
		"categoria_id":"VT2", "fabricant":"Fabricant 13", "preu":2220, "stock": 1}
])

db.usuaris.insertMany([
  {"_id": 1, "nom": "Campos Summers", "correu_e": "campossummers@interloo.com"},
  {"_id": 2, "nom": "Rosa Pennington", "correu_e": "rosapennington@interloo.com"},
  {"_id": 3, "nom": "Kristin Mckenzie", "correu_e": "kristinmckenzie@interloo.com"},
  {"_id": 4, "nom": "Sadie Mcdaniel", "correu_e": "sadiemcdaniel@interloo.com"},
  {"_id": 5, "nom": "Maricela Berger", "correu_e": "maricelaberger@interloo.com"},
  {"_id": 6, "nom": "Gale Burton", "correu_e": "galeburton@interloo.com"},
  {"_id": 7, "nom": "Norma Wiggins", "correu_e": "normawiggins@interloo.com"},
  {"_id": 8, "nom": "Wilcox Henderson", "correu_e": "wilcoxhenderson@interloo.com"},
  {"_id": 9, "nom": "Roxanne Hardy", "correu_e": "roxannehardy@interloo.com"},
  {"_id": 10, "nom": "Jasmine Rowe", "correu_e": "jasminerowe@interloo.com"},
  {"_id": 11, "nom": "Valdez Mejia", "correu_e": "valdezmejia@interloo.com"},
  {"_id": 12, "nom": "Eloise Valenzuela", "correu_e": "eloisevalenzuela@interloo.com"}
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


db.carretons.insertMany([
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
