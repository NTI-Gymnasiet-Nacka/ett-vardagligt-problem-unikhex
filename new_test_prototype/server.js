const express = require('express');
const router = require('./api');
const app = express();
const PORT = 3000;

// middleware to parse request body as JSON
app.use(express.json());

// add the router as a middleware to the app
app.use('/api', router);

// start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
