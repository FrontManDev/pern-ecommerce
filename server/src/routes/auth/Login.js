// Import the Router from Express
const route = require('express').Router();

// Import the LoginController  from the controllers folder
const {LoginController} = require('../../controllers/authController/LoginController');

// Define a POST route for '/Login' that will call the LoginController 
// When a client sends a POST request to /api/Login, this controller handles it
route.post('/Login', LoginController );

// Export the router to be used in the main app
module.exports = route;
