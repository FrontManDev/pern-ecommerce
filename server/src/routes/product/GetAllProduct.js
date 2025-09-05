// Import the Router class from Express
const route = require('express').Router();

// Import the GetAllProduct controller function
const { GetAllProduct } = require('../../controllers/productController/GetAllProduct');

// Define a GET route for get All products
// When a GET request is made to '/all', the GetAllProduct controller is executed
route.get('/all', GetAllProduct);

// Export the router so it can be used in the main app
module.exports = route;
