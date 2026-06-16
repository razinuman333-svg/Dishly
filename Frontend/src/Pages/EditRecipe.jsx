import React, { useState } from 'react'
import assets from '../assets/assets'
import axios from 'axios' 
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

function EditRecipe() {

const rcpDtls=useLoaderData()
const navigate=useNavigate()
const {id} = useParams()

  const [title, setTitle] = useState(rcpDtls.title)
  const [ingredients, setIngredients] = useState(rcpDtls.ingredients)
  const [instructions, setInstructions] = useState(rcpDtls.instructions)
  const [category, setCategory] = useState(rcpDtls.category)
  const [time, setTime] = useState(rcpDtls.time)
  const [file, setFile] = useState(null)


  const handleSubmit=async(e)=>{
        e.preventDefault()
       
        const formData=new FormData()
        formData.append("title",title)
        formData.append("ingredients",ingredients)
        formData.append("instructions",instructions)
        formData.append("category",category)
        formData.append("time",time)
        if(file){
          formData.append("file",file)
        }

        await axios.put(`http://localhost:5000/recipe/${id}`,formData,{
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
        value={title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
        value={ingredients}
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          onChange={(e) => setIngredients(e.target.value.split(','))}

          className="w-full border p-2 rounded"
        />

        <input
          value={instructions}
          type="text"
          name="instructions"
          placeholder="instructions"
          onChange={(e) => setInstructions(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
        value={category}
          type="text"
          name="category"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
        value={time}
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

export default EditRecipe
