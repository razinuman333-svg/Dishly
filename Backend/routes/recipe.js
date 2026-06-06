const express = require('express')
const router = express.Router()
const {getAllRecipes,addRecipe,getRecipe,editRecipe,deleteRecipe} = require('../controllers/recipe')

router.get('/',getAllRecipes) //getting all recipes
router.get('/:id',getRecipe)
router.post('/',addRecipe)
router.put('/:id',editRecipe)
router.delete('/:id',deleteRecipe)

module.exports=router