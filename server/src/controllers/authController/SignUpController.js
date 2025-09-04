const { prisma } = require('../../../prisma/prisma');
const bcrypt = require('bcrypt');

const SignUpController = async (req, res) => {
    try {

        const { firstName, lastName, email, password, address, image } = req.body;

        if (!firstName || !lastName || !email || !password || !address) {
            return res.status(400).json({ message: "Enter all the information" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                address,
                image
            }
        });

        return res.status(200).json({ message: 'Welcome', user });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { SignUpController };