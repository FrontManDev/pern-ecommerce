// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to get All Category
const GetAllCategory = async (req, res) => {
    try {
        // Get All categoreis in the database using Prisma
        const Categoreis = await prisma.category.findMany();

        // Check if all categoreis is fetched
        if (!Categoreis) {
            return res.status(500).json({ message: "Error with fetching this categoreis" });
        }

        // Return a success message if everything went well
        return res.status(200).json({ message: 'all categoreis',Categoreis:Categoreis});
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the GatAllCategory controller to use in routes
module.exports = { GetAllCategory };