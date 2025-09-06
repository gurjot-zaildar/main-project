
import { useForm } from 'react-hook-form';
import {nanoid} from 'nanoid'
import { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const Createrecipes = () => {
  const navigate = useNavigate()
  const {data,setdata} =useContext(recipecontext);

  const { register, handleSubmit, reset} = useForm();

  const submithandler=(recipe)=>{
  recipe.id= nanoid();
  console.log(recipe)
    const copydata= [...data];
    copydata.push(recipe)
    setdata(copydata)

    localStorage.setItem("recipes", JSON.stringify(copydata))

   toast.success("new recipe created!");
    reset();
    navigate("/recipes")
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

          <option  value="Breakfast">Breakfast</option>
           <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            

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
