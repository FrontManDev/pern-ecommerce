const route = require('express').Router();;
route.use('/',require('../product/AddProduct'));
module.exports = route;