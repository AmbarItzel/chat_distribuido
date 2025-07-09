const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  console.log('Cuerpo recibido en user-service:', req.body); // Depuración
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

class UserService {
  async createUser({ username, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    return await newUser.save();
  }

  async getUserByUsername(username) {
    return await User.findOne({ username });
  }

  async loginUser(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1h" });
    return { user, token };
  }
}

module.exports = new UserService();