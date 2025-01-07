const { hashPassword, comparePassword, generateToken } = require('../Utils/authUtils.js');

let users = [];

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  const token = generateToken(newUser);

  return res.status(201).json({ message: 'User registered successfully', token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);

  return res.status(200).json({ message: 'Login successful', token });
};

const protectedRoute = (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(400).json({ message: 'Invalid token' });
  }

  res.json({ message: 'Protected content', user: decoded });
};

module.exports = { registerUser, loginUser, protectedRoute };
