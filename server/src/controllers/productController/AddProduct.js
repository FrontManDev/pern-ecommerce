// Import the Prisma client instance from the prisma setup file
const { prisma } = require('../../../prisma/prisma');

// Controller function to add a new Product
// This function will handle POST requests to create a product under a specific category
const AddProduct = async (req, res) => {
    try {
        // Extract the category ID from the request parameters
        // Example: POST /api/product/add/:id  -->  id = categoryId
        const { id } = req.params;

        // Extract product details from the request body
        const { Title, Description, Prix } = req.body;

        // Validate required fields
        // If any field is missing, return a 400 Bad Request error
        if (!Title || !Description || !Prix) {
            return res.status(400).json({ message: 'Please provide Title, Description, and Prix.' });
        }

        // Create a new product in the database using Prisma
        // The product is linked to a category via CatId (foreign key)
        const Product = await prisma.procuts.create({
            data: {
                Title,
                Description,
                Prix,
                CatId: id // This must match an existing Category ID in the database
            }
        });

        // Return a success response with the created product details
        return res.status(200).json({
            message: 'The Product was created successfully.',
            Product: Product
        });

    } catch (error) {
        // Handle unexpected errors
        // Return 500 Internal Server Error with error message
        return res.status(500).json({ Error: error.message });
    }
};

// Export the AddProduct controller to be used in route files
module.exports = { AddProduct };
