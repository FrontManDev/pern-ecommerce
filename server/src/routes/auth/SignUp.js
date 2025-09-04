// Import the Router from Express
const route = require('express').Router();

// Import the SignUpController from the controllers folder
const { SignUpController } = require('../../controllers/authController/SignUpController');

// Define a POST route for '/Signup' that will call the SignUpController
// When a client sends a POST request to /api/Signup, this controller handles it
route.post('/Signup', SignUpController);

// Export the router to be used in the main app
module.exports = route;
