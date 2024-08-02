import Navbar from "../../Components/Navbar";
import "./Home.scss";
import heroimg from "../../assets/heroimg.jpg";
import { useState } from "react";
import Products from "../Products/Products";
import quotesimg from "../../assets/quotesimg.jpg"




function Home() {



  return (
    <div className="Home-body">
      
     
        {/* <div className="side-bar">
          
  </div> */}

      <div className="hero">
        <img src={heroimg} alt="img" />
        <div className="buttons">
          <button className="btn-dog">DOG</button>
          <button className="btn-cat">CAT</button>
        </div>
      </div>
      <Products />
      {/* <div className="quotes-section">
        <div className="first">quotes</div>
        <div className="second">
          <img src={quotesimg} alt="" />

        </div>
      </div> */}
    </div>
  );
}

export default Home;
