// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to add a new category
const UpdateCategory = async (req, res) => {
    try {
        // Destructure Id from the request params
        const { id } = req.params;
        // Destructure Title and Description from the request body
        const { Title, Description } = req.body;

        // Validate that both Title and Description are provided
        if (!Title && !Description) {
            return res.status(400).json({ message: 'information invalid' });
        }

        // update the category in the database using Prisma
        const Category = await prisma.category.update({
            where: {
                id
            },
            data: {
                Title,
                Description
            }
        });

        // Check if category cupdate failed (should rarely happen)
        if (!Category) {
            return res.status(500).json({ message: "Error with updating this category" });
        }

        // Return a success message if everything went well
        return res.status(200).json({ message: 'The category is updated successfully', Category: Category });
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the UpdateCategory controller to use in routes
module.exports = { UpdateCategory };