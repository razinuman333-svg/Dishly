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
            <FiSun/>
            <span>Breakfast</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <BiDish/>
            <span>Lunch</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <BiSolidDish/>
            <span>Dinner</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
         <LuIceCreamBowl/>
         <span>Deserts</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <IoFastFoodOutline/>
            <span>Snaks</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <FaLeaf/>
            <span>Veg</span>
        </div>
        <div className='rounded-lg  flex flex-col items-center justify-center border border-gray-500'>
            <RiDrinks2Line/>
            <span>Drinks</span>

        </div>

      
    </div>
  )
}

export default Category
