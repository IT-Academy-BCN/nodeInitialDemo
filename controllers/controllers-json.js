const { writeFile, readFile } = require('fs/promises');

// Create User
const createUser = async ( answer ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.username == answer );

        if (findUser == undefined) {
            const newUser = {
                username: answer,
                tasks: [],
            };

            data.users.push(newUser);
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('New User created!');
        }
    } catch (error) {
        console.log('User already exists');
    }
};

module.exports = { createUser }