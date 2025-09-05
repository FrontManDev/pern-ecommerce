// Import the Router class from Express
const route = require('express').Router();

// Import the DeleteProduct controller function
const { DeleteProduct } = require('../../controllers/productController/DeleteProduct');

// Define a POST route for adding a new product
// When a POST request is made to '/deleteProduct', the delete Product controller is executed
route.delete('/delete/:id', DeleteProduct);

// Export the router so it can be used in the main app
module.exports = route;