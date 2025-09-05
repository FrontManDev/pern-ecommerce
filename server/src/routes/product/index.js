const route = require('express').Router();;
route.use('/',require('../product/AddProduct'));
route.use('/',require('../product/DeleteProduct'));
route.use('/',require('../product/UpdateProduct'));
route.use('/',require('../product/GetAllProduct'));
route.use('/',require('../product/GetProdcutById'));
module.exports = route;