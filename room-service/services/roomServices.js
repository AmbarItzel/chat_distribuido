const Room = require("../model/roomModel");

class RoomService {
    async createRoom(name, creatorId) {
        const room = new Room({ name, creator: creatorId, members: [creatorId] });
        return await room.save();
    }

    async joinRoom(roomId, userId) {
        const room = await Room.findById(roomId);
        if (!room) throw new Error("Sala no encontrada");
        if (!room.members.includes(userId)) {
            room.members.push(userId);
            await room.save();
        }
        return room;
    }
}

module.exports = new RoomService();