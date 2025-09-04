const { prisma } = require('../../../prisma/prisma'); // Import Prisma client
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing and comparison

// Login controller function
const LoginController = async (req, res) => {
    try {
        // Destructure email and password from request body
        const { email, password } = req.body;

        // Check if email or password is missing
        if (!email || !password) {
            return res.status(400).json({ message: "Enter all the information" });
        }

        // Find user in the database by email
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        // If user not found, return an error
        if (!user) {
            return res.status(400).json({ message: 'incorrect password or email' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If password does not match, return an error
        if (!isMatch) {
            return res.status(400).json({ message: 'incorrect password or email' });
        }

        // If login is successful, return a welcome message
        return res.status(200).json({ message: `welcome ${user.firstName + ' ' + user.lastName}` });
        
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ message: error.message });
    }
}

// Export the LoginController
module.exports = { LoginController };
