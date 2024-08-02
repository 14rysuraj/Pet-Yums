import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import DogFoods from "./Pages/DogFoods/DogFoods";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
function App() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <Router>
        <Navbar setShowSearch={setShowSearch} />
        {showSearch ? (
          <div className="search">
            <div className="first">
              <IoSearchOutline />
              <form>
                <input type="text" placeholder="SEARCH FOR . . . . . ." />
              </form>
            </div>

            <button onClick={() => setShowSearch((prev) => !prev)}>
              <RxCross1 />
            </button>
          </div>
        ) : (
          ""
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog-foods" element={<DogFoods />} />
          <Route path="/food/:id" element={<FoodDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
