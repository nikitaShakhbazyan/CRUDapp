const express = require('express')
const router = express.Router()
const {getCategories,getCategory,updateCategory,createCategory,deleteCategory} = require('../controller/categoriesController')

router.get('/',getCategories)
router.post('/',createCategory)
router.get('/:id',getCategory)
router.put('/:id',updateCategory)
router.delete('/:id',deleteCategory)

module.exports = router