import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate=useNavigate()
  return (
     <section className="max-w-7xl  mx-auto px-6 py-20">
      <div className="grid  lg:grid-cols-2 gap-9 items-center">

        {/* Left Content */}
        <div>
          <p className="uppercase tracking-widest text-gray-500 text-sm mb-4">
            Share. Cook. Inspire.
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 ">
            Discover, Share &
            <br />
            Savor Amazing Recipes
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Join our community of food lovers. Share your favorite
            recipes and discover new ones every day.
          </p>

          <div className="mt-8 flex gap-4">
            <button onClick={()=>navigate('/allrecipe')} className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
              Explore Recipes
            </button>

            <button onClick={()=>navigate('/addRecipe')} className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
              Share Recipe
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={assets.hero}
            alt="Food"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
   
  );
}

export default Hero
