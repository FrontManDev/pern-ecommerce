// Import the Router class from Express
const route = require('express').Router();

// Import the UpdateProduct controller function
const { UpdateProduct } = require('../../controllers/productController/UpdateProduct');

// Define a PUT route for updating an existing product
// When a PUT request is made to '/update/:id', the UpdateProduct controller is executed
// Example: PUT /api/product/update/123  --> updates the product with id = 123
route.put('/update/:id', UpdateProduct);

// Export the router so it can be used in the main app
module.exports = route;