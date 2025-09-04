// Import the Router class from Express
const route = require('express').Router();

// Import the  DeletedCategory  controller function
const { DeletedCategory } = require('../../controllers/categoryController/DeleteCategory');

// Define a POST route for delete a category
// When a POST request is made to '/deleteCategory', the deleteCategory controller is executed
route.delete('/deleteCategory', DeletedCategory);

// Export the router so it can be used in the main app
module.exports = route;
