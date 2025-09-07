import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Createrecipes from "../components/Createrecipes";
import Recipes from "../components/Recipes";
import SingleRecipes from "../components/SingleRecipes";
import Fav from "../components/Fav";
import Pagenotfound from "../components/Pagenotfound";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/createrecipes" element={<Createrecipes />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipes />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
};

export default Mainroutes;
