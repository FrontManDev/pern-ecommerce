// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Import bcrypt for hashing passwords
const bcrypt = require('bcrypt');
const { Generate_accestoken } = require('../../util/Generate_accestoken'); // Import Function of Token Generate

// Controller function to handle user signup
const SignUpController = async (req, res) => {
    try {
        // Destructure user data from the request body
        const { username, email, password, conffirm_password } = req.body;

        // Validate that all required fields are provided
        if (!username || !email || !password || !conffirm_password) {
            // If any field is missing, send a 400 Bad Request response
            return res.status(400).json({ message: "Enter all the information" });
        }

        // Check if Password & conffirm_password  is match
        if (password !== conffirm_password) {
            // send a 400 Bad Request response
            return res.status(400).json({ message: "Password is Not Match" });
        }
        // Hash the password before storing it in the database
        // The second parameter (10) is the salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database using Prisma
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword, // Store hashed password
                role // ADMIN or USER
            }
        });

        // Generate Token fo user
        const token = Generate_accestoken(user.id, user.role);

        // Send a success response with the created user
        return res.status(200).json({ message: 'Welcome', user, token });

    } catch (error) {
        // Handle any unexpected errors and send a 500 Internal Server Error
        return res.status(500).json({ message: error.message });
    }
};

// Export the controller so it can be used in your routes
module.exports = { SignUpController };
