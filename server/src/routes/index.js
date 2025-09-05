const route = require('express').Router();
route.use('/auth', require('./auth'));
route.use('/category', require('./category'));
route.use('/product', require('./product'));
module.exports = route;