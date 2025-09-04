const express = require('express');
const app = express();
app.use(express.json());
const Signup = require('./src/routes/auth/SignUp');
app.use('/api', Signup);
app.listen(5000, () => {
    console.log('serve is running in http://localhost:5000');
})