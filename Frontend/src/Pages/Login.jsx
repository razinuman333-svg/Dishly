import React from 'react'
import assets from '../assets/assets'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Login() {
     const navigate=useNavigate()
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
          <h1 className='text-5xl'>Welcome Back!</h1>
          <p>Login to continue to your account</p>
        </div>
        {/* input fields*/}
        <div className='flex flex-col gap-4  h-60 items-center w-96 pt-4'>

           <div className=' flex border border-gray-300 rounded-xl  h-12 items-center gap-3 px-2 '>
               <MdOutlineEmail className='bg-white-800'/>
            <input className='  border-0 outline-none focus:ring-0' type='email' placeholder='Email'/>
         
           </div>

          <div className=' flex border border-gray-300 rounded-xl  h-12 items-center  gap-3 px-2'>
            <FaLock/>
            <input className='border-0 outline-none focus:ring-0' type='text' placeholder='password'/>
         
          </div>
          <div>
            <button className='border rounded-md bg-green-500 h-12 w-20 hover:bg-orange-500'>Login</button>
          </div>
          <div>
            <p>Don't have an account? <span onClick={()=>navigate('/signup')} className='text-orange-400 hover:text-orange-600'>Signup</span></p>
          </div>
             
        </div>
        
      </div>
    </div>
   </div>
  )
}

export default Login
