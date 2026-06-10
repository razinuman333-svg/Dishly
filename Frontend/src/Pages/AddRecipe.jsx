import React, { useState } from 'react'
import assets from '../assets/assets'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'

function AddRecipe() {
 const navigate=useNavigate()

  const [title, setTitle] = useState(null)
  const [ingredients, setIngredients] = useState(null)
  const [instructions, setInstructions] = useState(null)
  const [category, setCategory] = useState(null)
  const [time, setTime] = useState(null)
  const [file, setFile] = useState(null)


  const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/recipe',{title,ingredients,instructions,category,time,file},{
          headers:{
            "Content-Type":"multipart/form-data",
            'authorization':'bearer '+localStorage.getItem("token")
          }
        }).then(()=>navigate('/'))


  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Recipe Form
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          onChange={(e) => setIngredients(e.target.value.split(','))}

          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="instructions"
          placeholder="instructions"
          onChange={(e) => setInstructions(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="time"
          placeholder="time"
          onChange={(e) => setTime(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}

          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>

  )
}

export default AddRecipe
