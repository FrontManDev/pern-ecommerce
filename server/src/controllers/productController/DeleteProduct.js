// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to delete the Product
const DeleteProduct = async (req, res) => {
    try {
        // distructing the id of Product that we will delete
        const {id} = req.params;
        // Delete Product in the database using Prisma
        const DeletedProduct = await prisma.procuts.delete({
            where:{
                id
            }
        });
        // Check if all Product is deleted
        if (!DeletedProduct ) {
            return res.status(500).json({ message: "Error with deleting this product" });
        }

        // Return a success message if everything went well
        return res.status(200).json({ message: 'deleted Product',DeletedProduct:DeletedProduct});
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the DeleteProduct controller to use in routes
module.exports = { DeleteProduct };