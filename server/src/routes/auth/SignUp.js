const route = require('express').Router();
const {SignUpController} = require('../../controllers/authController/SignUpController');
route.post('/Signup',SignUpController);
module.exports = route;