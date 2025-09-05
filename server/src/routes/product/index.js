const route = require('express').Router();;
route.use('/',require('../product/AddProduct'));
route.use('/',require('../product/DeleteProduct'));
route.use('/',require('../product/UpdateProduct'));
module.exports = route;