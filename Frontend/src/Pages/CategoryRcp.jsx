import React,{useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function CategoryRcp() {
  const navigate = useNavigate()
    const [isFvrt, setIsFvrt] = useState()
      let fvtitems = JSON.parse(localStorage.getItem("fav")) ?? []
    
    const {category}=useParams()
    const allRecipe=useLoaderData()
    const ctgRcps=allRecipe.filter(item => item.category === category)
    

const handlefvrt = (item) => {
    const fltItem = fvtitems.filter(res => res._id != item._id)
    fvtitems = fvtitems.filter(res => res._id === item._id).length === 0 ? [...fvtitems, item] : fltItem
    localStorage.setItem("fav", JSON.stringify(fvtitems))
    setIsFvrt(pre => !pre)
  }


  return (
    <div>
     
     <div className=' gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  h-full  p-3' >
             {ctgRcps.map((item, index) => {
               return (
                 <div onDoubleClick={() => navigate(`/recipe/${item._id}`)} key={index} className='border rounded-xl overflow-hidden shadow-sm h-96 flex flex-col bg-white'>
                   {/* Image Container */}
                   <div className='h-3/5 w-full bg-gray-100 overflow-hidden'>
                     <img
                       className='h-full w-full object-cover'
                       src={`http://localhost:5000/rcpimg/${item.coverImage}`}
                       alt={item.title}
                     />
                   </div>
     
                   {/* Text & Content Container */}
                   <div className='p-4 flex flex-col justify-between flex-grow bg-orange-500  hover:bg-orange-700 text-white'>
                     <div>
                       <h1 className='text-lg font-semibold tracking-wide truncate'>{item.title}</h1>
                       <div className='flex justify-between'>
                    <h2>By : {item.createdBy?.name}</h2>
                    <img className='w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm' src={`http://localhost:5000/userImg/${item.createdBy?.coverImage}`}/>
                  </div>
                     </div>
     
                     {/* Icons / Details Row */}
                     <div className='flex justify-between items-center text-sm text-gray-300 mt-2'>
                       <div className='flex items-center gap-1'>
                         <FaRegClock className='text-500' />
                         <span>{item.time}</span>
                       </div>
                       <div className='flex items-center gap-1'>
                         <FaHeart style={{
                           color: (fvtitems.some(res => res._id === item._id)) ? "green" : ""
                         }} onClick={() => handlefvrt(item)} className=' cursor-pointer hover:scale-110 transition-transform' />
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

export default CategoryRcp
