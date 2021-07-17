import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

try{

mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
} catch(e){
    console.log(e);
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
    console.log('Conexión db correcta');
});

mongoose.set('useFindAndModify', false);

export default db;