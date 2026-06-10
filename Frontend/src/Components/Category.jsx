import React from 'react'
import { FiSun } from "react-icons/fi";
import { BiDish } from "react-icons/bi";
import { BiSolidDish } from "react-icons/bi";
import { LuIceCreamBowl } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { RiDrinks2Line } from "react-icons/ri";

function Category() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-7  h-35 gap-4 px-2'>

        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500  '>
            <FiSun className='text-amber-500'/>
            <span>Breakfast</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <BiDish className='text-orange-500'/>
            <span>Lunch</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <BiSolidDish className='text-red-700'/>
            <span>Dinner</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
         <LuIceCreamBowl className='text-pink-600'/>
         <span>Deserts</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <IoFastFoodOutline className='text-yellow-600'/>
            <span>Snaks</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <FaLeaf className='text-emerald-600'/>
            <span>Veg</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <RiDrinks2Line className='text-teal-600'/>
            <span>Drinks</span>

        </div>

      
    </div>
  )
}

export default Category
