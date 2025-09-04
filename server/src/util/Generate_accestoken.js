// function fo generate the accestoken
function Generate_accestoken(id,role) {
    // import JWT module
    const JWT = require('jsonwebtoken');
    // generate and return token 
    return JWT.sign({ userId: id, Role: role }, process.env.ACCESTOKEN_SECRET_KEY, { expiresIn: process.env.ACCESTOKEN_EXSPIRE_DATE });
}

module.exports = {Generate_accestoken};