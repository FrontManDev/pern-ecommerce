// Import the Router class from Express
const route = require('express').Router();

// Import the AddCategory controller function
const { AddCategory } = require('../../controllers/categoryController/AddCategory');

// Define a POST route for adding a new category
// When a POST request is made to '/addcategory', the AddCategory controller is executed
route.post('/addcategory', AddCategory);

// Export the router so it can be used in the main app
module.exports = route;
