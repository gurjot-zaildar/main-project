
import Home from '../components/Home'
import {Routes,Route} from 'react-router-dom'
import About from '../components/About'
import Createrecipes from '../components/Createrecipes'
import Recipes from '../components/Recipes'


const Mainroutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/createrecipes' element={<Createrecipes/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    
  </Routes>
  )
}

export default Mainroutes
