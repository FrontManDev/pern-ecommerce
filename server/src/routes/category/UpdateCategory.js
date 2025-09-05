// Import the Router class from Express
const route = require('express').Router();

// Import the  UpdateCategory controller function
const {  UpdateCategory } = require('../../controllers/categoryController/UpDateCategory');

// Define a POST route for adding a new category
// When a POST request is made to '/addcategory', the AddCategory controller is executed
route.put('/update/:id',  UpdateCategory);

// Export the router so it can be used in the main app
module.exports = route;
