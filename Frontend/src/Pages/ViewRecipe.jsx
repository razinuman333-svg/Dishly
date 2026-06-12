import React from 'react'
import assets from '../assets/assets'
import { useLoaderData } from 'react-router-dom'

function ViewRecipe() {

  const rcpDtls = useLoaderData()


  return (

    <div className='flex flex-col '>

      {/*image div*/}

      <div className='  flex pt-2 justify-center pb-2 '>
        <diV className=' h-100 rounded-xl  w-200'>
          <img className='overflow-hidden object-cover h-full w-full rounded-xl' src={`http://localhost:5000/rcpimg/${rcpDtls.coverImage}`} />
        </diV>
      </div>



      {/*text*/}
      <diV className=' flex justify-between px-2 gap-3 p-4 '>

        {/*left*/}
        <div className='bg-slate-700 rounded-xl p-3 '>
          <h1 className='text-xl text-white'>Ingredients</h1>
          <p className='text-white text-sm'>{rcpDtls.ingredients} </p>
        </div>
        
        {/*right*/}
        <div className='bg-slate-700 rounded-xl p-3'>
          <h1 className='text-xl text-white'>instructions</h1>
          <p className='text-white text-sm'>{rcpDtls.instructions}</p>
        </div>

      </diV>



    </div>


  )

}




export default ViewRecipe





