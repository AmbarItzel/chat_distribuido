const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true }, // Cambiado a String si usamos username como creatorId
    members: [{ type: String }], // También String para consistencia
});

module.exports = mongoose.model("Room", roomSchema);