// Import the Router class from Express
const route = require('express').Router();

// Import the GetProductById controller function
const { GetProductById } = require('../../controllers/productController/GetProductById');

// Define a GET route for get product
// When a GET request is made to '/:id', the GetProductById controller is executed
route.get('/:id', GetProductById);

// Export the router so it can be used in the main app
module.exports = route;
