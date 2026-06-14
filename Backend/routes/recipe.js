const express = require('express')
const router = express.Router()
const {getAllRecipes,addRecipe,getRecipe,editRecipe,deleteRecipe,upload} = require('../controllers/recipe')
const verifytoken= require('../middleware/auth')

router.get('/',getAllRecipes) //getting all recipes
router.get('/:id',getRecipe)
router.post('/',upload.single('file'),verifytoken,addRecipe)
router.put('/:id',upload.single('file'),verifytoken,editRecipe)
router.delete('/:id',deleteRecipe)

module.exports=router