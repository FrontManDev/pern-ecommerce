const route = require('express').Router();
route.use('/',require('./AddCategory'));
route.use('/',require('./DeleteCategory'));
route.use('/',require('./GetAllCategory'));
route.use('/',require('./GetCategoryById'));
route.use('/',require('./UpdateCategory'));
module.exports = route;