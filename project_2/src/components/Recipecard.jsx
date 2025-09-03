import React from 'react'
import {Link} from 'react-router-dom';
const Recipecard = (props) => {

    const {id,image,title,chef,description} = props.recipe;

  return (
    <Link
    to={`/recipes/details/${id}`}
    className='overflow-hidden block p-10'
    >
    <img className='h-50 w-50 object-cover rounded-xl' src={image} alt="" />
    <h1>{title}</h1>
    <small>{chef}</small>
    <p className='w-50'>{description.slice(0,100)}... <small>more</small> </p>
    </Link>
  )
}

export default Recipecard
