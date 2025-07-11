const RoomService = require("../services/roomServices");

const createRoom = async (req, res) => {
    const { name, creatorId } = req.body;

    // Validar que los campos requeridos estén presentes
    if (!name || !creatorId) {
        return res.status(400).json({ error: "El nombre de la sala y el ID del creador son requeridos" });
    }

    try {
        const room = await RoomService.createRoom(name, creatorId);
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const joinRoom = async (req, res) => {
    const { roomId, userId } = req.body;

    // Validar que los campos requeridos estén presentes
    if (!roomId || !userId) {
        return res.status(400).json({ error: "El ID de la sala y el ID del usuario son requeridos" });
    }

    try {
        const room = await RoomService.joinRoom(roomId, userId);
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createRoom, joinRoom };