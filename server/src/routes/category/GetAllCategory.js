// Import the Router class from Express
const route = require('express').Router();

// Import the GetAllCategory controller function
const { GetAllCategory } = require('../../controllers/categoryController/GetAllCategory');

// Define a POST route for get All categoreis
// When a POST request is made to '/allcategory', the allcategory controller is executed
route.get('/allcategory', GetAllCategory);

// Export the router so it can be used in the main app
module.exports = route;
