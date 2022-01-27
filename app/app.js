const {interactiveMenu,
        pause
    } = require('./helpers/interaction');

const main = async ()=>{
    let opt = '';
    do{
        opt = await interactiveMenu();



        await pause();
    }while(opt !== '0')
};


main();