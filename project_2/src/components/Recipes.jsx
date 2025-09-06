
import { useContext } from 'react'
import {recipecontext} from '../context/RecipeContext'
import Recipecard from './Recipecard'

const Recipes = () => {

    const {data} = useContext(recipecontext)

    const renderrecipe = data.map((recipe) =>(
      <Recipecard key={recipe.id} recipe={recipe} />
  ))

  return (
    <div className='flex mt-10 gap-10  flex-wrap '>
      {data.length > 0 ? renderrecipe : "No recipes found"}
    </div>
  )
}

export default Recipes