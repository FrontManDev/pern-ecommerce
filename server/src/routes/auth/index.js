const route = require('express').Router();
route.use('/',require('./Login'));
route.use('/',require('./SignUp'));
module.exports = route;