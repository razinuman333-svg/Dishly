import React from 'react'
import assets from '../assets/assets'


function Footer() {
  return (
    // Main footer box - stacks rows vertically using flex-col
    <div className='w-full bg-white px-10 py-8 flex flex-col gap-10'>
      
      {/* ROW 1: Your content columns (Logo, Quick Links, Categories, Legal) */}
      <div className='flex justify-between items-start w-full gap-10'>
        
        {/* Column 1: Logo & Socials */}
        <div className='flex flex-col gap-3'>
          <img className='h-20 w-auto' src={assets.tastyBites} alt="Tasty Bites Logo" />
          <p className='text-sm max-w-xs'>
            A community to food lovers to discover, share and enjoy recipe.
          </p>
          <div className='flex gap-3 mt-2'>
            <img src={assets.insta} className="w-5 h-5" />
            <img src={assets.fb} className="w-5 h-5" />
            <img src={assets.x} className="w-5 h-5" />
            <img src={assets.yb} className="w-5 h-5" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className='flex flex-col gap-2 text-sm'>
          <p className='font-bold text-base mb-1'>Quick Links</p>
          <p>Home</p>
          <p>My Recipe</p>
          <p>Favourites</p>
          <p>Contact</p>
        </div>

        {/* Column 3: Categories */}
        <div className='flex flex-col gap-2 text-sm'>
          <p className='font-bold text-base mb-1'>Categories</p>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Vegan</p>
          <p>Deserts</p>
        </div>

        {/* Column 4: Legal */}
        <div className='flex flex-col gap-2 text-sm'>
          <p className='font-bold text-base mb-1'>Legal</p>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Cookie policy</p>
        </div>

      </div>

     
      <hr className="border-gray-200" />

      {/* ROW 2: Copyright section drops down here completely clean */}
      <div className='text-center w-full'>
        <p className='font-light text-sm text-gray-500'>
          © 2026 tasty bites All rights Reserved
        </p>
      </div>

    </div>
  )
}

export default Footer


