// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to add a new category
const AddCategory = async (req, res) => {
    try {
        // Destructure Title and Description from the request body
        const { Title, Description } = req.body;

        // Validate that both Title and Description are provided
        if (!Title || !Description) {
            return res.status(400).json({ message: 'Enter all information' });
        }

        // Create a new category in the database using Prisma
        const Category = await prisma.category.create({
            data: {
                Title,
                Description
            }
        });

        // Check if category creation failed (should rarely happen)
        if (!Category) {
            return res.status(500).json({ message: "Error with creating this category" });
        }

        // Return a success message if everything went well
        return res.status(200).json({ message: 'The category is created successfully' ,Category:Category});
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the AddCategory controller to use in routes
module.exports = { AddCategory };