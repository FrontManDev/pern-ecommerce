// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to get the Product by Id
const GetProductById = async (req, res) => {
    try {
        // Destructure the id of the product from the request parameters
        const { id } = req.params;

        // Get product by ID from the database using Prisma
        // Also include the related Category for more context (optional)
        const Product = await prisma.procuts.findUnique({
            where: {
                id
            },
            include: { Category: { select: { Title: true } } }
        });

        // Check if product is found
        if (!Product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Return a success response with the product
        return res.status(200).json({ message: 'The Product', Product: Product });
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the GetProductById controller to use in routes
module.exports = { GetProductById };
