import { connect } from 'mongoose';

export const dbConnectMongo = async () => {
    try {
        await connect(process.env.MONGODB);
        console.log('Base de datos MongoDB online');
    } catch (error) {
        throw new Error('Error al iniciar la base de datos');
    };
};