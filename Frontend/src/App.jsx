import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNavigation from './Components/MainNavigation'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

function App() {

const router= createBrowserRouter([
  { path:'/' ,element:<MainNavigation/>,children:[
    {path:'/' ,element:<Home/>},
    {path:'/signup',element:<Signup/>},
    {path:'/login',element:<Login/>}
  ]}

])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
