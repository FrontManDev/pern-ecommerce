// Import the Router class from Express
const route = require('express').Router();

// Import the GetCategoryById controller function
const { GetCategoryById } = require('../../controllers/categoryController/GetCategoryById');

// Define a POST route for get category
// When a POST request is made to '/category', the category controller is executed
route.get('/:id', GetCategoryById);

// Export the router so it can be used in the main app
module.exports = route;
