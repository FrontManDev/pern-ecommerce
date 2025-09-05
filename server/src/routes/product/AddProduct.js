// Import the Router class from Express
const route = require('express').Router();

// Import the AddProduct controller function
const { AddProduct } = require('../../controllers/productController/AddProduct');

// Define a POST route for adding a new product
// When a POST request is made to '/addProduct', the AddProduct controller is executed
route.post('/add/:id', AddProduct);

// Export the router so it can be used in the main app
module.exports = route;