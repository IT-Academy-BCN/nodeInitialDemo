
const fs = require("fs").promises;

async function llistarTotesLesTasques() {
    try {
        let llegirArxiu = await fs.readFile('../models/todo.json', { encoding: 'utf8' }); //cargar fitxer
        let tasques = JSON.parse(llegirArxiu); //converteix en objecte        
        console.log("llistat", tasques)
        let count = tasques.length;
        for (let i = 0; i < count; i++) {
            console.log(`Usuari: ${tasques[i].usuari}`);
            console.log(`Tasca: ${tasques[i].nomTasca}`);
            console.log(`Estat Tasca: ${tasques[i].estat}`);
            console.log(`Data Inicial: ${tasques[i].dataInici}`);
            console.log(`Data final: ${tasques[i].dataFinal}`);
            console.log(`\n`);
        }

    } catch (err) {
        console.log(err);
    }
}


async function llistarPerEstat(estatTasca) {
    try {
        let llegirArxiu = await fs.readFile('../models/todo.json', { encoding: 'utf8' }); //cargar fitxer

        let tasques = JSON.parse(llegirArxiu); //converteix en objecte        
        // console.log("llistat", tasques)

        let estat = estatTasca;
        let count = tasques.length;
        console.log(`TASQUES AMB ESTAT: ${estat}`)

        for (let i = 0; i < count; i++) {
            let estatTascaActual = tasques[i].estat;
            if (estatTascaActual === estat) {
                console.log(`Usuari: ${tasques[i].usuari}`);
                console.log(`Tasca: ${tasques[i].nomTasca}`);
                console.log(`Estat Tasca: ${tasques[i].estat}`);
                console.log(`Data Inicial: ${tasques[i].dataInici}`);
                console.log(`Data final: ${tasques[i].dataFinal}`);
                console.log(`\n`);
            };
        };


    } catch (err) {
        console.log(err);
    }
}


llistarTotesLesTasques();
llistarPerEstat("finalitzada");