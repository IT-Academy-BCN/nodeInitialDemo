const {interactiveMenu} = require('./helpers/interaction');

const main = async ()=>{
    let opt = '';
    do{
        opt = await interactiveMenu();
    }while(opt !== '0')
};


main();