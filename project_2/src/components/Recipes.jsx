
import { useContext } from 'react'
import {recipecontext} from '../context/RecipeContext'
import Recipecard from './Recipecard'

const Recipes = () => {

    const {data} = useContext(recipecontext)

    const renderrecipe = data.map((recipe) =>(
      <Recipecard key={recipe.id} recipe={recipe} />
  ))

  return (
    <div className='bg-gray-800 h-screen w-screen flex flex-wrap text-white'>
      {data.length > 0 ? renderrecipe : "No recipes found"}
    </div>
  )
}

export default Recipes