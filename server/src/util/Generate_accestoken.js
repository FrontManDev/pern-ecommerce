function Generate_accestoken(id,role) {
    const JWT = require('jsonwebtoken');
    return JWT.sign({ userId: id, Role: role }, process.env.ACCESTOKEN_SECRET_KEY, { expiresIn: process.env.ACCESTOKEN_EXSPIRE_DATE });
}

module.exports = {Generate_accestoken};