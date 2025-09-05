// Import the Express framework
const express = require('express');

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests
// This allows us to access req.body in POST/PUT requests
app.use(express.json());

app.use('/api',require('./src/routes'));

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});
