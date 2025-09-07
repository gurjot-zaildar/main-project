import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import Recipecard from "./Recipecard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipe = data.map((recipe) => (
    <Recipecard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="bg-pink-100 h-screen">
      <div className="flex bg-pink-100 p-10 flex-wrap ">
        {data.length > 0 ? renderrecipe : "No recipes found"}
      </div>
    </div>
  );
};

export default Recipes;
