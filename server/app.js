// Import the Express framework
const express = require('express');

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests
// This allows us to access req.body in POST/PUT requests
app.use(express.json());

// Import the Signup router from the specified path
const Signup = require('./src/routes/auth/SignUp');

// Use the Signup router for all routes starting with '/api'
// For example, POST /api/signup will be handled by this router
app.use('/api', Signup);

// Import the Signup router from the specified path
const Login = require('./src/routes/auth/Login');

// Use the Signup router for all routes starting with '/api'
// For example, POST /api/signup will be handled by this router
app.use('/api', Login);

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});
