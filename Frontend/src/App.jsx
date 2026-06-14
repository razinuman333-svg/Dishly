import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNavigation from './Components/MainNavigation'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import AddRecipe from './Pages/AddRecipe'
import AllRecipes from './Pages/AllRecipes'
import ViewRecipe from './Pages/ViewRecipe'
import axios from 'axios'
import MyRecipe from './Pages/MyRecipe'
import EditRecipe from './Pages/EditRecipe'
import Favourites from './Pages/Favourites'
import CategoryRcp from './Pages/CategoryRcp'

function App() {

  const getAllRcp=async()=>{
    let allRecipe= await axios.get('http://localhost:5000/recipe')
    return allRecipe.data
  }

  const getMyRecipe=async()=>{
        let user= await JSON.parse(localStorage.getItem("user"))
      let AllRcps= await getAllRcp()
     return AllRcps.filter(item=>item.createdBy===user._id)
  }


  const getRcp=async({params})=>{   
 let rcpDtls=await axios.get(`http://localhost:5000/recipe/${params.id}`)
     return rcpDtls.data
  }

const router= createBrowserRouter([
  { path:'/' ,element:<MainNavigation/>,children:[
    {path:'/' ,element:<Home/>},
    {path:'/signup',element:<Signup/>},
    {path:'/login',element:<Login/>},
    {path:'/addRecipe',element:<AddRecipe/>},
    {path:'/allrecipe',element:<AllRecipes/>,loader:getAllRcp},
    {path:'/recipe/:id',element:<ViewRecipe/>,loader:getRcp},
    {path:'/myrecipe',element:<MyRecipe/>,loader:getMyRecipe},
    {path:'/edit/:id',element:<EditRecipe/>,loader:getRcp},
    {path:'/favourites',element:<Favourites/>},
    {path:'/category/:category',element:<CategoryRcp/>,loader:getAllRcp}

  ]}

])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
