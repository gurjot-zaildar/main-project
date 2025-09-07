import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      ingredients: recipe?.ingredients,
      description: recipe?.description,
      category: recipe?.category,
    },
  });

  const updatehandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("recipe updated");
    navigate("/recipes");
  };

  const deletehandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    unfavhandler();

    toast.success("recipe deleated");
    navigate("/recipes");
  };

  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const favhandler = () => {
    let copfav = [...favroite];
    copfav.push(recipe);
    setfavroite(copfav);
    localStorage.setItem("fav", JSON.stringify(copfav));
  };

  const unfavhandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  return recipe ? (
    <div className="bg-pink-100 w-screen flex flex-col lg:flex-row lg:gap-0 gap-10">
      <div className="bg-white transition lg:hover:scale-101 lg:shadow lg:hover:shadow-lg relative lg:mb-10 lg:w-1/2  w-[90%] ml-[5%] rounded-xl mt-7 p-5 shadow-lg ">
        {favroite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={unfavhandler}
            className="absolute lg:hover:scale-104 right-[5%] text-3xl text-red-400 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={favhandler}
            className="absolute lg:hover:scale-104 right-[5%] text-3xl text-red-400 ri-heart-line"
          ></i>
        )}

        <h1 className="text-3xl font-bold text-pink-700">{recipe.title}</h1>
        <h1 className="mt-2">
          <e className="font-medium">Category:</e> {recipe.category}
        </h1>
        <h1 className="mt-2 mb-4">
          <e className="font-medium">Chef:</e> {recipe.chef} 👨‍🍳
        </h1>
        <img
          className="h-90 w-[100%] object-cover rounded-xl ml-auto mr-auto"
          src={recipe.image}
        />
        <h1 className="text-2xl font-medium mt-5 mb-5">Description </h1>
        <p>{recipe.description}</p>
        <h1 className="font-medium text-2xl mt-5 mb-5">Ingredients</h1>
        <p className={" whitespace-pre-line"}>{recipe.ingredients}</p>
      </div>

      <div className="bg-white lg:mr-[5%] lg:mt-7 transition lg:hover:scale-101 lg:shadow lg:hover:shadow-lg lg:w-1/2 w-[90%] ml-[5%] rounded-xl shadow-lg  mb-10">
        <form onSubmit={handleSubmit(updatehandler)}>
          <h1 className="text-center mt-3 mb-3 text-2xl font-bold text-pink-500 ">
            Edit Recipe
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
            placeholder="Chef name"
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
          <div className="flex place-content-evenly">
            <button className="border lg:hover:scale-103 lg:hover:text-white transition lg:hover:bg-green-500 text-green-500 rounded-xl shadow active:text-white active:scale-102 active:bg-green-500  font-medium p-1 text-2xl mt-5 mb-10">
              Update Recipe
            </button>
            <button
              onClick={deletehandler}
              className="border lg:hover:scale-103 lg:hover:text-white transition lg:hover:bg-red-500 shadow active:text-white active:scale-102 active:bg-red-500 font-medium text-red-500 rounded-xl p-1 text-2xl mt-5 mb-10"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "loading"
  );
};

export default SingleRecipes;
