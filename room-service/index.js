const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/roomRoutes");
const connectDB = require("./config/database"); // Add this import

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/rooms", roomRoutes);
connectDB()

app.listen(3002, () => {
    console.log("Servicio de salas corriendo en http://localhost:3002");
});