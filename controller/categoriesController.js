
const getCategories = (req,res) => {
    res.status(200).json({message:"Get all categories"})
}

const createCategory = (req,res) => {
    res.status(201).json({message:"Create category"})
}

const getCategory = (req,res) => {
    res.status(200).json({message:`Get category ${req.params.id}`})
}

const updateCategory = (req,res) => {
    res.status(200).json({message:`Update category ${req.params.id}`})
}

const deleteCategory = (req,res) => {
    res.status(200).json({message:`Deleted category ${req.params.id}`})
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}