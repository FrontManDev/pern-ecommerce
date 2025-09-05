const route = require('express').Router();;
route.use('/',require('../product/AddProduct'));
route.use('/',require('../product/DeleteProduct'));
module.exports = route;