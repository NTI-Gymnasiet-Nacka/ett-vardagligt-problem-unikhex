const express = require('express');
const db = require('./db');

const router = express.Router();

// GET /api/users - retrieve all users
router.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal server error');
        }
        res.send(rows);
    });
});

// POST /api/users - add a new user
router.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Internal server error');
        }
        res.send('User added successfully.');
    });
});

module.exports = router;
