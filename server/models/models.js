const mongoose = require('mongoose');

module.exports = async () => {
    let mongoDB = process.env.DB_URL;

    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
    
    const usersSchema = new mongoose.Schema({
        userName: String,
        password: String,
        room:{roomId: String,roomName: String},
    }, { timestamps: true });

    const roomsSchema = new mongoose.Schema({
        roomName: String,
        messages: [{ user:{userName: String, userId: String}, room:{roomName: String, roomId: String}, text: String }]
    }, { timestamps: true });

    mongoose.model('Users', usersSchema);
    mongoose.model('Rooms', roomsSchema);
    
    //entry point
    const Rooms = require('mongoose').model("Rooms");
    
    const duplicateRoom = await Rooms.findOne({ roomName:'FOYER' });
    if(!duplicateRoom) {
        const room = await Rooms.create({ roomName:'FOYER' })
    }
}
