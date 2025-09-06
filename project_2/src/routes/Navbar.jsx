import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex place-content-between  p-2 '>
    
     <NavLink className={(e)=>e.isActive?"text-yellow-500 font-bold bg-green-100 rounded-xl p-1":"font-medium z-1 "} to={"/"} >Home</NavLink>
     <NavLink className={(e)=>e.isActive?"text-yellow-500 font-bold  bg-green-100 rounded-xl p-1":" font-medium"} to={"/about"} >About</NavLink>
     <NavLink className={(e)=>e.isActive?"text-yellow-500 font-bold  bg-green-100 rounded-xl p-1":"font-medium"} to={"/createrecipes"} >Create Recipes</NavLink>
     <NavLink className={(e)=>e.isActive?"text-yellow-500 font-bold  bg-green-100 rounded-xl p-1":"font-medium"} to={"/recipes"} > Recipes </NavLink>
    <NavLink className={(e)=>e.isActive?"text-yellow-500 font-bold  bg-green-100 rounded-xl p-1":"font-medium"} to={"/fav"} > Favroite </NavLink>

    </div>
  )
}

export default Navbar
