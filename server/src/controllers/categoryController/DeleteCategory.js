// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to delete the Category
const DeletedCategory = async (req, res) => {
    try {
        // distructing the id of category that we will delete
        const {id} = req.body;
        // Delete category in the database using Prisma
        const DeletedCategory = await prisma.category.delete({
            where:{
                id
            }
        });
        // Check if all category is deleted
        if (!DeletedCategory ) {
            return res.status(500).json({ message: "Error with deleting this category" });
        }

        // Return a success message if everything went well
        return res.status(200).json({ message: 'deleted Category',DeletedCategory:DeletedCategory});
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the DeletedCategory controller to use in routes
module.exports = { DeletedCategory };