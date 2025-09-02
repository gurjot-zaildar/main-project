import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex gap-10 justify-center'>
     <NavLink className={(e)=>e.isActive?"text-pink-400":""} to={"/"} >Home</NavLink>
     <NavLink className={(e)=>e.isActive?"text-pink-400":""} to={"/about"} >About</NavLink>
     <NavLink className={(e)=>e.isActive?"text-pink-400":""} to={"/createrecipes"} >Recipes</NavLink>



    </div>
  )
}

export default Navbar
