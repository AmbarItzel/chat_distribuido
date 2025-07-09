// userController.js
const UserService = require("../services/userServices");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }
  try {
    const user = await UserService.createUser({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const user = await UserService.getUserByUsername(req.params.username);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }
  try {
    const { token } = await UserService.loginUser(username, password);
    res.json({
      token,
      roomId: 'default-room', // Podría integrarse con room-service en el futuro
      message: 'Login successful'
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { createUser, getUserByUsername, loginUser };