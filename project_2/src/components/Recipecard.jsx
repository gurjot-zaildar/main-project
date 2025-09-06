import React from 'react'
import {Link} from 'react-router-dom';
const Recipecard = (props) => {

    const {id,image,title,chef,description,category} = props.recipe;

  return (
    <div className=" border  w-2/3 ml-auto mr-auto hover:scale-110 active:scale-105 shadow hover:shadow-lg rounded-2xl">
    <Link
    to={`/recipes/details/${id}`}
    className=''
    >
    <img className='h-50 w-full rounded-2xl object-cover' src={image} alt="" />
    <div className='flex '>
    <h1 className='text-2xl p-2'>{title}</h1>
    <h1>{category}</h1>
    </div>
    <small>👨‍🍳{chef}</small>
    <p className=''>{description.slice(0,100)}... <small>more</small> </p>
    </Link>
    </div>
  )
}

export default Recipecard
