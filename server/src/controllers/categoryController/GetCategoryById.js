// Import the Prisma client instance
const { prisma } = require('../../../prisma/prisma');

// Controller function to get the Category By Id
const GetCategoryById = async (req, res) => {
    try {
        // distructing the id of category that we will fetch
        const { id } = req.params;
        // get category ByID in the database using Prisma
        const Category = await prisma.category.findUnique({
            where: {
                id
            }
        });
        // Check if category is Fetched
        if (!Category) {
            return res.status(500).json({ message: "Error with Fetchin this category" });
        }

        // Return a success message if everything went well
        return res.status(200).json({ message: 'the Category', Category: Category });
    } catch (error) {
        // Catch any unexpected errors and return a 500 response
        return res.status(500).json({ Error: error.message });
    }
}

// Export the GetCategoryById controller to use in routes
module.exports = { GetCategoryById };