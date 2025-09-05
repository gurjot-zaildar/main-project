import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipes = () => {
  const navigate= useNavigate();
  const {data,setdata} =useContext(recipecontext);
  
  const params = useParams();
  const recipe = data.find((recipe)=> params.id == recipe.id)
  

  const { register, handleSubmit} = useForm({
    defaultValues : {
      title: recipe?.title,
      chef : recipe?.chef,
      image : recipe?.image,
      ingredients : recipe?.ingredients,
      description : recipe?.description,
      category : recipe?.category


    }
  });

  const updatehandler=(recipe)=>{
  const index = data.findIndex((recipe)=> params.id == recipe.id)
  const copydata = [...data];
  copydata[index]= {...copydata[index],...recipe}
  setdata(copydata)
  localStorage.setItem("recipes",JSON.stringify(copydata))
  toast.success("recipe updated");
  navigate("/recipes")
  }

  const deletehandler = ()=> {
const filterdata = data.filter((r)=> r.id != params.id);
 setdata(filterdata)
 localStorage.setItem("recipes",JSON.stringify(filterdata))

unfavhandler()

 toast.success("recipe deleated")
 navigate("/recipes")
  }

  const [favroite, setfavroite] = useState(
  JSON.parse(localStorage.getItem("fav"))||[]
  );

  const favhandler=()=>{
    let copfav=[...favroite]
    copfav.push(recipe);
    setfavroite(copfav)
  localStorage.setItem("fav",JSON.stringify(copfav))
  }

  
  const unfavhandler=()=>{
    const filterfav =favroite.filter((f)=> f.id != recipe?.id);
    setfavroite(filterfav)
    localStorage.setItem("fav",JSON.stringify(filterfav))
  }


  return recipe ? 
  <div className='bg-gray-800 h-screen w-screen flex text-white'>
    <div className='left relative w-1/2 p-2'>

      {favroite.find((f)=>f.id==recipe?.id)?(

        <i onClick={unfavhandler} className="absolute right-[5%] text-red-400 ri-heart-fill">
        
        </i>):(
          <i onClick={favhandler} className="absolute right-[5%] text-red-400 ri-heart-line">
          
      </i>)}

      <h1>{recipe.title}</h1>
      <img className="h-50 w-50 object-cover" src={recipe.image}  />
    
    </div>

    <div className='bg-gray-800 text-white p-5 h-screen w-1/2'>

      <form onSubmit={handleSubmit(updatehandler)}>

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

           <button onClick={deletehandler} className='block bg-red-900 rounded-xl mt-10 p-3'>delete recipe</button>

      </form>
    </div>
    
    </div>
    
    : "loading"
  
}

export default SingleRecipes
