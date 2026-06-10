import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Featured() {
     const navigate=useNavigate()
    const[allRecipe,setAllRecipe]=useState([])

    const getAllRecipe=async()=>{
       
     await axios.get('http://localhost:5000/recipe').then(res=>{
      setAllRecipe(res.data)
      
       
     })
   

    }

   useEffect(()=>{
    getAllRecipe()
   },[])



  return (
<div>
    {/* hedings */}
    <div className='h-10 px-3 flex justify-between items-end'>
        <h2 className=' text-xl'>Featured Recipes</h2>
        <span className='hover:text-orange-500' onClick={()=>navigate('/allrecipe')}>view all recipes</span>

    </div>
    {/*cards*/}
        <div className=' gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  h-140  p-3' >
            {allRecipe.slice(0,4).map((item,index)=>{
               return (
  <div key={index} className='border rounded-xl overflow-hidden shadow-sm h-96 flex flex-col bg-white'>
    {/* Image Container */}
    <div className='h-3/5 w-full bg-gray-100 overflow-hidden'>
      <img 
        className='h-full w-full object-cover' 
        src={`http://localhost:5000/rcpimg/${item.coverImage}`} 
        alt={item.title}
      />
    </div>

    {/* Text & Content Container */}
    <div className='p-4 flex flex-col justify-between flex-grow bg-slate-900 text-white'>
      <div>
        <h1 className='text-lg font-semibold tracking-wide truncate'>{item.title}</h1>
      </div>
      
      {/* Icons / Details Row */}
      <div className='flex justify-between items-center text-sm text-gray-300 mt-2'>
        <div className='flex items-center gap-1'>
          <FaRegClock className='text-amber-500' />
          <span>{item.time}</span>
        </div>
        <div className='flex items-center gap-1'>
          <FaRegHeart className='text-rose-500 cursor-pointer hover:scale-110 transition-transform' />
          <span>28</span>
        </div>
      </div>
    </div>
  </div>
)

            })}

       
       
      

    </div>
  
</div>
)
}

export default Featured
