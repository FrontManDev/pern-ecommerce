const { prisma } = require('../../../prisma/prisma');
const bcrypt = require('bcrypt');
const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Enter all the information" });
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return res.status(400).json({ message: 'incorrect password or email' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'incorrect password or email' });
        }
        return res.status(200).json({ message: `wellcome ${user.firstName + ' ' + user.lastName}` });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { LoginController };