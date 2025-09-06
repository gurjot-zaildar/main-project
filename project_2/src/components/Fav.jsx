
import Recipecard from './Recipecard'

const Fav = () => {

    const favroite = JSON.parse(localStorage.getItem("fav")||[]);

    const renderrecipe = favroite.map((recipe) =>(
      <Recipecard key={recipe.id} recipe={recipe} />
  ))

  return (
    <div className='bg-pink-100 h-screen'>
    <div className='flex flex-wrap'>
      {favroite.length > 0 ? renderrecipe : "No favroite recipes found"}
    </div></div>
  )
}

export default Fav