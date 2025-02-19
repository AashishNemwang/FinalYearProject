const db = require('../config/db');
const bcrypt = require('bcryptjs');
const generateToken = require('../Utils/generateToken');

// User Signup
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email already exists
    const checkUser = 'SELECT * FROM users WHERE email = ?';
    db.query(checkUser, [email], async (err, results) => {
      if (results.length > 0) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into database
      const insertUser = 'INSERT INTO users (email, password) VALUES (?, ?)';
      db.query(insertUser, [email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ message: 'Server error' });

        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  const getUser = 'SELECT * FROM users WHERE email = ?';
  db.query(getUser, [email], async (err, results) => {
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);

    res.json({ token, message: 'Login successful' });
  });
};
