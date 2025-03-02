const bcrypt = require('bcryptjs');
const db = require('../db.js');
const generateToken = require('../utils/generateToken');

exports.registerUser = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    const sql = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
    db.query(sql, [email, hashedPassword, role], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Database error' });
      }

      const token = generateToken(email);
      res.status(201).json({ message: 'User registered successfully', token });
    });
  });
};
