import React from 'react'
import {Link} from 'react-router-dom';
const Recipecard = (props) => {

    const {id,image,title,chef,description,category} = props.recipe;

  return (
    <div className=" w-2/3 lg:w-2/9 mt-5 mb-5 bg-white overflow-hidden ease-in-out ml-auto mr-auto hover:scale-101 transition active:scale-101 shadow hover:shadow-lg rounded-2xl">
    <Link
    to={`/recipes/details/${id}`}
    className=''
    >
    <img className='h-50 w-full rounded-2xl  hover:scale-104 transition object-cover' src={image} alt="" />
    <div className='flex place-content-between ml-4 mr-10'>
    <h1 className='text-2xl  p-2 font-bold mb-3 text-pink-800'>{title}</h1>
    <h1 className=' mt-3 p-1 border rounded-2xl mb-3 bg-pink-500 text-white border-pink-500 hover:text-pink-500 transition hover:bg-white'>{category}</h1>
    </div>
    <small className='ml-4  text-base  font-medium bg-pink-200 rounded-xl transition shadow hover:shadow-lg p-1'><sm className="font-bold">Chef:</sm> {chef} 👨‍🍳</small>
    <p className='p-5 text-sm opacity-90'>{description.slice(0,100)}... <small>more</small> </p>
    </Link>
    </div>
  )
}

export default Recipecard
