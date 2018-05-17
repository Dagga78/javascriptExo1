/*
Partie 1 - Fonction Basique
 */

//Créer une fonction arrow qui affiche “hello World”
arrow = new function () {
    return console.log("Hello World");
}

//Créer une fonction qui prend un paramètre et exécuter cette fonction
var param = paramTaker(2);

function paramTaker(param1) {
    return console.log(param1);
}

//Créer une fonction qui multiplie une valeur et retourne cette valeur multipliée
var param = paramTaker2(2, 2);

function paramTaker2(param1, param2) {
    return console.log(param1 * param2);
}

/*
Partie 2 - Fonctions simples
 */

var film = {
    'nom': "Forrest Gump",
    'Année': 1994,
    'Durée': "2h20min",
    'Réalisateur': "Robert Zemeckis",
    'Like': 100806
};


//Créer une fonction qui retourne l’année d’un film
var film2 = annéeByFilm();

function annéeByFilm() {
    return console.log(film["Année"]);
}

//Créer une fonction qui multiplie le nombre de like de 2
var film2 = likeByFilmMultiplyBy2();

function likeByFilmMultiplyBy2() {
    return console.log(film["Like"] * 2);
}

//Créer une fonction qui retourne true si l’année d’un film est supérieur à 2000
var film2 = trueforAnnée();

function trueforAnnée() {
    if (film["Année"] > 2000) {
        return console.log("true");
    }
}

//Créer une fonction qui retourne true si le nombre de likes est supérieur à 1000
var film2 = trueforLike();

function trueforLike() {
    if (film["Like"] > 1000) {
        return console.log("true");
    }
}

//Créer une fonction qui ajoute un genre supplémentaire.
var film2 = addparam();

function addparam() {
    film.genres = ['comédie dramatique', 'Romance'];
    return console.log(film);
}

/*
Partie 3 - Fonctions avancées
 */

var films = [
    {
        'nom': "Forrest Gump",
        'Année': 1994,
        'Durée': "2h20min",
        'Réalisateur': "Robert Zemeckis",
        'Acteur': ['Tom Hanks'],
        'Genre': ['Comédie dramatique', 'Romance'],
        'Like': 100806,
        'privé': true
    },
    {
        'nom': "Django Unchained",
        'Année': 2013,
        'Durée': "2h44min",
        'Réalisateur': "Quentin Tarantino",
        'Acteur': ['Jamie Foxx', 'Christoph Waltz'],
        'Genre': ['Western'],
        'Like': 10030,
        'privé': true
    }];

//Créer une fonction qui retourne le nombre de like des films ci-dessus
var film2 = numberOfLikes();

function numberOfLikes() {
    for (var i in films) {
        console.log(films[i].Like);
    }
}

//Créer une fonction qui retourne la liste des genres disponibles
var film2 = listGenre();

function listGenre() {
    var genre = [];
    for (var i in films) {
        genre = genre.concat(films[i].Genre)
    }
    console.log(genre)
}

//Créer une fonction qui retourne les noms films privés
var film2 = nameForPrivate();

function nameForPrivate() {
    for (var i in films) {
        if (films[i].privé === true) {
            console.log(films[i].nom);
        }
    }
}

//Créer une fonction qui retourne l’année du film le plus récent
var film2 = moreRecentFilm();

function moreRecentFilm() {
    var response = 0;
    for (var i in films) {
        if (response < films[i].Année) {
            response = films[i].Année;
        }
    }
    console.log(response)
}

//Créer une fonction de recherche qui prend en paramètre un genre et doit retourner les nombres des films auquel ce genre est présent.
var film2 = reshearchByGenre("Romance");

function reshearchByGenre(param1) {
    var number = [];
    for (var i in films) {
        for (var t in films[i].Genre)
        if (param1 === films[i].Genre[t]) {
            number.push(i)
        }
    }
    console.log(number);
}
//Créer une fonction de recherche qui prend en paramètre un acteur et doit retourner les nombres des films auquel cet acteur est présent.
var film2 = reshearchByActor("Jamie Foxx");

function reshearchByActor(param1) {
    var number = [];
    for (var i in films) {
        for (var t in films[i].Acteur)
        if (param1 === films[i].Acteur[t]) {
            number.push(i)
        }
    }
    console.log(number);
}
//Créer une fonction de recherche qui prend en paramètre une année et doit retourner les nombres des films auquel l’année est supérieur.
var film2 = reshearchByAnnée(2015);

function reshearchByAnnée(param1) {
    var number = [];
    for (var i in films) {
        if (param1 > films[i].Année) {
            number.push(i)
        }
    }
    console.log(number);
}



