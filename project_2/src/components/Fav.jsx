
import Recipecard from './Recipecard'

const Fav = () => {

    const favroite = JSON.parse(localStorage.getItem("fav")||[]);

    const renderrecipe = favroite.map((recipe) =>(
      <Recipecard key={recipe.id} recipe={recipe} />
  ))

  return (
    <div className='bg-gray-800 h-screen w-screen flex flex-wrap text-white'>
      {favroite.length > 0 ? renderrecipe : "No favroite recipes found"}
    </div>
  )
}

export default Fav