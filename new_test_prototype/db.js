const sqlite3 = require('sqlite3').verbose();
const DB_PATH = 'mydatabase.db';

// create a new database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

module.exports = db;
