
import { useForm } from 'react-hook-form';
import {nanoid} from 'nanoid'
import { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';

const Createrecipes = () => {
  const {data,setdata} =useContext(recipecontext);

  const { register, handleSubmit, reset} = useForm();

  const submithandler=(recipe)=>{
  recipe.id= nanoid();
  console.log(recipe)

    setdata([...data, recipe]);
    reset();
  }


  return (
    <div className='bg-gray-800 text-white p-5 h-screen w-screen'>

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

      
        <button className='block bg-gray-900 rounded-xl mt-10 p-3'>save recipe</button>

      </form>
    </div>
  )
}

export default Createrecipes
