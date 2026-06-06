const Recipe = require('../models/recipe')

const getAllRecipes = async(req, res) => {
    try{
        const allRecipes= await Recipe.find()
        res.json(allRecipes)
    }
    catch(err){
        res.json({
            message:err.message
        })
    }
  

}

const getRecipe=async(req,res)=>{
    const recipe= await Recipe.findById(req.params.id)
    res.json(recipe)

}

const addRecipe = async (req, res) => {
    const { title, ingredients, instructions, category, time } = req.body
    if (!title || !ingredients || !instructions) {
        res.json({
            message: "requires fields cant be empty"
        })
    }
    try {
        await Recipe.create({
            title, ingredients, instructions, category, time
        })
        res.json({
            message: "item added"
        })
    } catch (err) {
        res.json(err.message)
    }




}
const editRecipe=async(req,res)=>{
    
    
        try{
           const updatedRecipe= await Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updatedRecipe)
        }
        catch(err){
            res.status(500).json({error:err.message})
        }
       
    

}
const deleteRecipe=async(req,res) =>{
    await Recipe.deleteOne({_id:req.params.id})
    res.json({message:"deleted"})

}

module.exports = { getAllRecipes, addRecipe,getRecipe,editRecipe,deleteRecipe }