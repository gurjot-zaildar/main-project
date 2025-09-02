
import { useContext } from 'react'
import {recipecontext} from '../context/RecipeContext'

const Recipes = () => {

    const {data} = useContext(recipecontext)

    const renderrecipe = data.map((recipe) =>(
    <div key={recipe.id}>
    <h1>{recipe.title}</h1>
    </div>))

  return (
    <div className='bg-gray-800 h-screen w-screen text-white'>
      {renderrecipe}
    </div>
  )
}

export default Recipes