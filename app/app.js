
const inquirer = require('inquirer');
const tasca = require('./models/tasca');
const data = require('./data/json');

function crear_tasca() {
    inquirer.prompt([{
        name: 'nom_usuari',
        message: "Introdueix el nom de l'usuari",

    }, {
        name: 'nom_tasca',
        message: 'Nom de la tasca',

    }, {
        name: 'inici',
        message: "Introdueix data i hora d'inici:",
    }, {
        name: 'final',
        message: "Introdueix data i hora finals:",
    }, {
        name: 'estat',
        message: "Introdueix estat de la tasca:"

    }])
        .then(opcio => {
            console.log('Opció escollida: ', opcio);

            let tasca0 = new tasca((opcio.nom_usuari, opcio.nom_tasca, opcio.inici));
            tasca0.crear_tasca(opcio.nom_usuari, opcio.nom_tasca, opcio.inici, opcio.final, opcio.estat)

           await data.saveNewTask(tasca0);

        });
}

inquirer.prompt({
    type: 'rawlist',
    name: 'Aplicacio',
    message: "Benvinguda a l'aplicació TASQUES. Què vols fer? Escull una opció:",
    choices: ['Crear tasca', 'Esborrar tasca', 'Editar tascar', 'Llistar totes les tasques', 'Mostrar una tasca', 'Sortir']

})
    .then(opcio => {
        console.log('Opció escollida: ', opcio.Aplicacio);

        switch (opcio.Aplicacio) {
            case 'Crear tasca':
                crear_tasca();
                break;

            case 'Esborrar tasca':
                esborrar_tasca();
                break;

            default:
                break;
        }

    });

/*
        function esborrar_tasca() {
            inquirer.prompt([{
                name: 'Nom de la tasca',
                message: 'Nom de la tasca',

            }, {
                name: 'Inici',
                message: "Introdueix data i hora d'inici:",
            }, {
                name: 'Final',
                message: "Introdueix data i hora finals:",
            }, {
                name: 'Estat',
                message: "Introdueix estat de la tasca:"

            }])
                .then(opcio => {
                    console.log('Opció escollida: ', opcio);
                });
        }


    });


*/
