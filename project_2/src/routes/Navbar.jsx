import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:place-content-between  shadow  p-2 ">
      <div className="flex place-content-evenly lg:mr-25 lg:gap-10">
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-pink-600 font-bold bg-pink-100 rounded-xl p-1"
              : "font-medium z-1 "
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-pink-600 font-bold bg-pink-100 rounded-xl p-1"
              : " font-medium"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-pink-600 font-bold bg-pink-100 rounded-xl p-1"
              : "font-medium"
          }
          to={"/createrecipes"}
        >
          Create Recipes
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-pink-600 font-bold bg-pink-100 rounded-xl p-1"
              : "font-medium"
          }
          to={"/recipes"}
        >
          {" "}
          Recipes{" "}
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-pink-600 font-bold bg-pink-100 rounded-xl p-1"
              : "font-medium"
          }
          to={"/fav"}
        >
          {" "}
          Favroite{" "}
        </NavLink>
      </div>
      <div className="max-sm:hidden lg:ml-25">
        <p>
          <g className="font-bold text-xl text-pink-700">Recipe</g>
          <f className="font-bold text-xl"> Manager</f>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
