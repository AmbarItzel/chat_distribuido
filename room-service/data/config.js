const mongoose = require("mongoose");

const connectDB = async () => {
    const URL = "mongodb://admin:password@mongodb:27017/chatdb?authSource=admin";
    try {
        await mongoose.connect(URL);
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

module.exports = { connectDB };