// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to get all Products
const GetAllProduct = async (req, res) => {
    try {
        // Fetch all products from the database using Prisma
        // Includes the related Category for each product (optional, but useful)
        const Products = await prisma.procuts.findMany({
            include: { Category: { select: { Title: true } } }
        });

        // Check if products are fetched
        if (!Products) {
            return res.status(500).json({ message: "Error fetching products" });
        }

        // Return a success message with all products
        return res.status(200).json({ message: 'All products', Products: Products });
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the GetAllProduct controller to use in routes
module.exports = { GetAllProduct };
