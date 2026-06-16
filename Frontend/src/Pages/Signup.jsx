import React, { useState } from 'react'
import assets from '../assets/assets'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";
import axios from 'axios'

function Signup() {

  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [name,setName]=useState(null)

  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
   await axios.post('http://localhost:5000/signup',{email,password,name})
     .then((res)=>{
      localStorage.setItem("token",res.data.token)
      localStorage.setItem('user',JSON.stringify(res.data.user))
     

     })
      navigate('/')
           
  }

  return (
   <div className='px-5'>
     <div className='grid grid-cols-2 border rounded-lg shadow-xl object-cover'>
      <div>
        <img src={assets.login}/>
      </div>
       {/* right side*/}
       <div className=' flex flex-col items-center gap-4 pt-12  '>
        <div>
           {/* Heading*/}
          <h1 className='text-5xl'>Create Your Account</h1>
          <p>join our community and start your cooking journey</p>
        </div>
        {/* input fields*/}
        <div className='flex flex-col gap-4  h-60 items-center w-96 pt-4'>


      <div className=' flex border border-gray-300 rounded-xl  h-12 items-center gap-3 px-2 '>
               <IoPersonSharp className='bg-white-800'/>
            <input onChange={(e)=>setName(e.target.value)} className='  border-0 outline-none focus:ring-0' type='text' placeholder='Name'/>
         
           </div>


           <div className=' flex border border-gray-300 rounded-xl  h-12 items-center gap-3 px-2 '>
               <MdOutlineEmail className='bg-white-800'/>
            <input onChange={(e)=>setEmail(e.target.value)} className='  border-0 outline-none focus:ring-0' type='email' placeholder='Email'/>
         
           </div>

          <div className=' flex border border-gray-300 rounded-xl  h-12 items-center  gap-3 px-2'>
            <FaLock/>
            <input onChange={(e)=>setPassword(e.target.value)} className='border-0 outline-none focus:ring-0' type='text' placeholder='password'/>
         
          </div>
          <div>
            <button onClick={handleSubmit} className='border rounded-md bg-green-500 h-12 w-20 hover:bg-orange-500'>Signup</button>
          </div>
          <div>
            <p>Already have an account? <span onClick={()=>navigate('/login')} className='text-orange-400 hover:text-orange-600'>Login</span></p>
          </div>
             
        </div>
        
      </div>
    </div>
   </div>
  )
}

export default Signup
