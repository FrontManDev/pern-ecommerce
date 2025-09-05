// Import the Prisma client instance from the prisma setup file
const { prisma } = require('../../../prisma/prisma');

// Controller function to update an existing Product
// This function will handle PUT requests to update a product by its ID
const UpdateProduct = async (req, res) => {
    try {
        // Extract the product ID from the request parameters
        // Example: PUT /api/product/update/:id  -->  id = productId
        const { id } = req.params;

        // Extract product details from the request body
        const { Title, Description, Prix, CatId } = req.body;

        // Update an existing product in the database using Prisma
        // IMPORTANT: you should use prisma.procuts.update instead of prisma.procuts.create
        const Product = await prisma.procuts.update({
            where: {
                id // product ID to update
            },
            data: {
                Title,        // new title for the product
                Description,  // new description for the product
                Prix,         // new price
                CatId         // must match an existing Category ID in the database
            }
        });

        // Return a success response with the updated product details
        return res.status(200).json({
            message: 'The Product was updated successfully.',
            Product: Product
        });

    } catch (error) {
        // Handle unexpected errors (e.g., product not found, invalid CatId)
        // Return 500 Internal Server Error with error message
        return res.status(500).json({ Error: error.message });
    }
};

// Export the UpdateProduct controller to be used in route files
module.exports = { UpdateProduct };
