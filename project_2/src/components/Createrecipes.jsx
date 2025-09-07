import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Createrecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const { register, handleSubmit, reset } = useForm();

  const submithandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);

    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("new recipe created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="bg-pink-100 w-screen h-screen ">
      <form
        className="bg-white w-[86%] rounded-2xl transition shadow hover:shadow-lg ml-[7%] absolute mt-[10%] lg:mt-10 lg:w-[40%] lg:ml-[30%] "
        onSubmit={handleSubmit(submithandler)}
      >
        <h1 className="text-center mt-3 mb-3 text-2xl font-bold text-pink-500 ">
          Create Recipe
        </h1>
        <input
          className="border-b outline-0 p-2 transition focus:shadow-lg shadow-pink-200 rounded-xl w-[80%] ml-[10%] text-xl mt-[3%] hover:shadow-lg lg:focus:scale-101 lg:hover:scale-101 block"
          placeholder="Image url"
          {...register("image")}
          type="url"
        />

        <input
          className="border-b outline-0 p-2 transition focus:shadow-lg hover:shadow-lg lg:focus:scale-101 lg:hover:scale-101 shadow-pink-200 rounded-xl w-[80%] ml-[10%] text-xl mt-[3%] block"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <select
          className="block border-b outline-0 transition hover:shadow-lg lg:focus:scale-101 lg:hover:scale-101 focus:shadow-lg shadow-pink-200 rounded-xl w-[40%] ml-[10%] text-xl mt-[3%] p-2"
          {...register("category")}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <input
          className="border-b outline-0 p-2 transition hover:shadow-lg lg:focus:scale-101 lg:hover:scale-101 focus:shadow-lg shadow-pink-200 rounded-xl w-[80%] ml-[10%] text-xl mt-[3%] block"
          {...register("chef")}
          type="text"
          placeholder="chef name"
        />

        <textarea
          className="border-b outline-0 p-2 h-40 transition hover:shadow-lg lg:focus:scale-101 lg:hover:scale-101 resize-none focus:shadow-lg shadow-pink-200 rounded-xl w-[80%] ml-[10%] text-xl mt-[3%] block"
          {...register("description")}
          placeholder="Making Process"
        ></textarea>

        <textarea
          className="border-b outline-0 h-40 p-2 transition hover:shadow-lg lg:focus:scale-101 lg:hover:scale-101 resize-none focus:shadow-lg shadow-pink-200 rounded-xl w-[80%] ml-[10%] text-xl mt-[3%] block"
          {...register("ingredients")}
          placeholder="ingredients"
        ></textarea>

        <button className="border hover:shadow-lg lg:hover:scale-104 text-pink-600 font-bold shadow-lg  ml-[34%] active:bg-pink-500 active:text-white hover:bg-pink-500 hover:text-white transition mt-7 p-2 rounded-2xl mb-7 text-xl">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Createrecipes;
