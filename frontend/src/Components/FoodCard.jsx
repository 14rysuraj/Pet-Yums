import "./FoodCard.scss";
import img1 from "../assets/pic1.png";
import { useNavigate } from "react-router-dom";

function FoodCard({name,price,image,category}) {

  const navigate = useNavigate()

  return (
    <>
      <div className="card-body">
        <div className="first"  onClick={()=>navigate(`/food/${name}`)} >
          <div className="img">
            {console.log(image)}
            <img src={image} alt="image" />
          </div>

          <p > {name}</p>

          <p>NRS : { price}</p>
        </div>

        <button>ADD TO CART</button>
          </div>
          


       
    </>
  );
}

export default FoodCard;
