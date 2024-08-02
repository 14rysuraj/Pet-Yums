import "./FoodCard.scss";
import img1 from "../assets/pic1.png";

function FoodCard() {
  return (
    <>
      <div className="card-body">
        <div className="first">
          <div className="img">
            <img src={img1} alt="" />
          </div>

          <p >GRAIN SOIFHOISIGHSEOI OFOEF BUT THEIR IS ONE PROBLEM</p>

          <p>NRS : 500</p>
        </div>

        <button>ADD TO CART</button>
          </div>
          


       
    </>
  );
}

export default FoodCard;
