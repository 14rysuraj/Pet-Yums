import "./Products.scss";
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import FoodCard from "../../Components/FoodCard";

function Products() {
  return (
    <div className="products-body">
      <p>BUY HEALTHY FOODS FOR YOU PET</p>
      <div className="links">
        <div className="first">
          <NavLink to="/">Dog</NavLink>
          <NavLink to="/">Cat</NavLink>
        </div>
        <div className="second">
          <NavLink to="/">
            View All <IoIosArrowRoundForward />
          </NavLink>
        </div>
      </div>

      <div className="products-list">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}

export default Products;
