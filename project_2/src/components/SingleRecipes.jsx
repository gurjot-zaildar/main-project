import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';

const SingleRecipes = () => {

  
  const {data,setdata} =useContext(recipecontext);

  const { register, handleSubmit} = useForm();

  const submithandler=(recipe)=>{
  const index = data.findIndex((recipe)=> params.id == recipe.id)
  const copydata = [...data];
  copydata[index]= {...copydata[index],...recipe}
  }
 

    const params = useParams();
    const recipe = data.find((recipe)=> params.id == recipe.id)

  return recipe ? 
  <div className='bg-gray-800 h-screen w-screen flex text-white'>
    <div className='left w-1/2 p-2'>
      <h1>{recipe.title}</h1>
      <img className="h-50 w-50 object-cover" src={recipe.image}  />
    
    </div>

    <div className='bg-gray-800 text-white p-5 h-screen w-1/2'>

      <form onSubmit={handleSubmit(submithandler)}>

        <input
        className="border-b outline-0 p-2 block"
        placeholder='image url'
         {...register("image")}
         type="url" />

        <input
        className="border-b outline-0 p-2 block"
        {...register("title")} 
        type="text" 
        placeholder='Recipe Title' />

        <select 
        className='block border-b outline-0 p-2'
         {...register("category")}
        >

          <option  value="cat-1">category 1</option>
           <option value="cat-2">category 2</option>
            <option value="cat-3">category 3</option>

        </select>

        <input
        className="border-b outline-0 p-2 block"
        {...register("chef")} 
        type="text" 
        placeholder='chef name' />

        <textarea 
        className="border-b outline-0 p-2 block"
        {...register("description")}
        placeholder='description'
        ></textarea>

         <textarea 
        className="border-b outline-0 p-2 block"
        {...register("ingredients")}
        placeholder='ingredients'
        ></textarea>

      
        <button className='block bg-gray-900 rounded-xl mt-10 p-3'>update recipe</button>

           <button className='block bg-red-900 rounded-xl mt-10 p-3'>delete recipe</button>

      </form>
    </div>
    
    </div>
    
    : "loading"
  
}

export default SingleRecipes
