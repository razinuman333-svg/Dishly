import React, { useState } from 'react'
import assets from '../assets/assets'
import axios from 'axios' 
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function ProfilePic() {
const userDtls=JSON.parse(localStorage.getItem("user"))
const navigate=useNavigate()
const {id}=useParams()
const [file, setFile] = useState(null)
const [name,setName]=useState(userDtls.name)
const [email,setEmail]=useState(userDtls.email)

const handleSubmit=async(e)=>{
    
  e.preventDefault()
 await axios.put(`http://localhost:5000/edit/${id}`,{name,email,file},{
           headers:{
             "Content-Type":"multipart/form-data",
             'authorization':'bearer '+localStorage.getItem("token")
           }
         }).then((res)=>{
          localStorage.setItem("image",res.data.coverImage)
           navigate('/')
           toast.success("Profile Updated!")
         })

}

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Edit Profile
        </h2>

        <input
        value={name}
          type="text"
          name="name"
          placeholder=""
          onChange={(e) => setName(e.target.value)}

          className="w-full border p-2 rounded"
        />

        <input
        value={email}
          type="email"
          name="email"
         
          onChange={(e) => setEmail(e.target.value)}

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
          Update
        </button>
      </form>
    </div>

  )
}

export default ProfilePic
