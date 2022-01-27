const {interactiveMenu,
        pause,
        readInput
    } = require('./helpers/interaction');

const main = async ()=>{
    let opt = '';
    do{
        // Print the menu and return an option.
        opt = await interactiveMenu();

        switch(opt){
            case '1':
                const desc = await readInput('Description: ')
            break;
        }


        await pause();
    }while(opt !== '0')
};


main();