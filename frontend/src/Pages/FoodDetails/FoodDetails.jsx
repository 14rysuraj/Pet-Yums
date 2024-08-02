import { useState } from "react";
import pic1 from "../../assets/canine-cuisine.jpg";
import pic2 from "../../assets/pic1.png";
import "./FoodDetails.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

function FoodDetails() {
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [nutritionalInfoOpen, setNutritionalInfoOpen] = useState(false);

  const handleToggle = (setState) => {
    setState(prev => !prev);
  };

  return (
    <div className="food-detail-body">
      <div className="image">
        <img src={pic1} alt="" />
      </div>
      <div className="description">
        <p className="food-name">Canine Cuisine </p>
        <p className="describe">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ducimus
          error, quidem suscipit praesentium dolorem repudiandae laborum animi
          eius possimus magni vitae eveniet at eos, quod quis officiis.
          Aliquam, autem!{" "}
        </p>
        <p className="category">Dry Dog Food </p>
        <p className="price">NRS : 9000</p>
        <hr />
        <p>Size</p>
        <div className="size">
          <button className="size-box">1 LB</button>
          <button className="size-box">5 LB</button>
          <button className="size-box">20 LB</button>
        </div>
        <button className="add-to-cart-btn">
          <span>ADD TO CART</span>
        </button>
        <div className="drop-down-detail">
          <div className="detail" onClick={() => handleToggle(setIngredientsOpen)}>
            Ingredients{" "}
            {ingredientsOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
          {ingredientsOpen && (
            <div className="detail-content">
            
              <p>Turkey, potatoes, peas, lentils, carrots, eggs, ground flaxseed, turkey liver, broccoli, pumpkin, apples, coconut oil, natural turkey flavor, salmon oil, kale, chia seed, minerals [tricalcium phosphate, sodium chloride, iron amino acid chelate, copper amino acid chelate, manganese amino acid chelate, zinc amino acid chelate, sodium selenite], fenugreek seed, dried kelp, taurine, vitamins [vitamin A supplement, vitamin D3 supplement, vitamin E supplement, thiamine mononitrate (vitamin B1), riboflavin (vitamin B2), calcium pantothenate (vitamin B5), pyridoxine hydrochloride (vitamin B6), folic acid, vitamin B12 supplement, niacin supplement], mixed tocopherols, turmeric, dried bacillus coagulans fermentation product, rosemary extract.</p>
            </div>
          )}
          <div className="detail" onClick={() => handleToggle(setNutritionalInfoOpen)}>
            Nutritional Info{" "}
            {nutritionalInfoOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
          {nutritionalInfoOpen && (
            <div className="detail-content-nutrition">
                
                          <div className="lists" >
                              <ul>
                                  <li>Calories</li>
                                  <li>Protein</li>
                                  <li>Fat</li>
                                  <li>Fiber</li>
                                  <li>Moisture</li>

                              </ul>
                          </div>
                          <div className="lists">
                          <ul>
                                  <li>423(Kcal) per cup</li>
                                  <li>26%</li>
                                  <li>14.5%</li>
                                  <li>5%</li>
                                  <li>Moisture</li>

                              </ul>
                </div>
                          
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;