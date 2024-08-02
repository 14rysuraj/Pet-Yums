import Navbar from "../../Components/Navbar";
import "./Home.scss";
import heroimg from "../../assets/heroimg.jpg";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Products from "../Products/Products";
import quotesimg from "../../assets/quotesimg.jpg"




function Home() {
  const [showSearch, setShowSearch] = useState(false);
  console.log(showSearch);

  return (
    <div className="Home-body">
      <Navbar setShowSearch={setShowSearch} />
          {showSearch ? <div className="search">
              

              <div className="first">
                  <IoSearchOutline />
                  <form >
                      <input type="text" placeholder="SEARCH FOR . . . . . ." />
                  </form>
              
              </div>
             
              <button onClick={()=>setShowSearch(prev=>!prev)}>
              <RxCross1 />
                 </button>
               


      </div> : ""}
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
