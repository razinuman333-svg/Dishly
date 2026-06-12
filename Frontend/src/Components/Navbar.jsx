import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const user = localStorage.getItem("user")
  const userdtls = JSON.parse(user)

  const navigate = useNavigate()
  const [sideBarOpen, setSideBarOpen] = useState(true)
  return (
    <div className='flex justify-between items-center  px-12  '>

      <img className='w-30 h-20' src={assets.tastyBites} />



      <div className={`text-gray-700  sm:text-sm ${sideBarOpen ? 'max-sm:w-60 max-sm:pl-10' : ' max-sm:w-0 '} max-sm:fixed
        top-0 bottom-0 right-0  max-sm:flex-col max-sm:bg-green-600 max-sm:text-white
        max-sm:pt-20 flex sm:items-center gap-5 transition-all duration-600`}>

        <img className='sm:hidden  w-5' onClick={() => setSideBarOpen(false)} src={assets.close} />

        <a  onClick={() =>{ setSideBarOpen(false);
                             navigate('/')
        }} className='sm:hover:border-b sm:hover:border-orange-500' >Home</a>
        <a onClick={() => setSideBarOpen(false)} className='sm:hover:border-b sm:hover:border-orange-500'>Favrouites</a>
        <a onClick={() => {
          setSideBarOpen(false)
          navigate('/myrecipe')
        } } className='sm:hover:border-b sm:hover:border-orange-500'>MyRecipe</a>
        <a onClick={() => setSideBarOpen(false)} className='sm:hover:border-b sm:hover:border-orange-500'>Contact</a>



      </div>


      <div className='flex mt-5 gap-3'>
        {userdtls ?<div> <a className='sm:hover:bg-green-500 text-white px-6 py-2  text-sm bg-orange-500 rounded-full w-25 h-10 transition-all duration-300'>{userdtls.email}</a></div> 
          : <a onClick={() => navigate('/signup')} className='sm:hover:bg-green-500 text-white px-6 py-2  text-sm bg-orange-500 rounded-full w-25 h-10 transition-all duration-300'>SignUp</a>}

        <img onClick={() => setSideBarOpen(true)} className='sm:hidden h-8 w-8' src={assets.menu} />
      </div>



    </div>
  )
}

export default Navbar
