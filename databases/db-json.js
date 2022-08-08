const { readFile, writeFile } = require('fs/promises');

// Check if Database Exists
const connectDB = async () => {
    try {
        let data = await readFile( './databases/database.json', 'utf8' );
        
    } catch (error) {
        try {
            data = { users: [] };
            data = JSON.stringify(data);
            await writeFile( './databases/database.json', data );
            console.log('Database Created');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { connectDB };