import React from 'react'
import Home from '../components/Home'
import {Routes,Route} from 'react-router-dom'
import About from '../components/About'
import Createrecipes from '../components/Createrecipes'

const Mainroutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/createrecipes' element={<Createrecipes/>}/>
  </Routes>
  )
}

export default Mainroutes
