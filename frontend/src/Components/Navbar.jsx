import "./Navbar.scss"
import { NavLink, Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";




function Navbar({setShowSearch}) {
    const handleShow = () => {
        setShowSearch(prev => !prev);
        
    }

    const [panelOpen, setPanelOpen] = useState(false);
    const navigate=useNavigate()
    
    return (
        <>
  
            <nav className="navbar-body">
                <div className="burger">
                <CiMenuBurger />

                </div>
       
            <div className="first">
            <div className="img" onClick={()=>navigate("/")}>
                <p>PET YUMS</p>
               
            </div>
            <div className="links">
                <NavLink to="/dog-foods">Dog</NavLink>
                <NavLink to="/dog-foods">Cat</NavLink>
                <NavLink to="/dog-foods">Toys</NavLink>
                <NavLink to="/dog-foods">About Us</NavLink>

                </div>

            </div>
      
            <div className="second">
                <button className="login-btn"><LiaUserSolid />  </button>
                <button onClick={handleShow}><IoSearchOutline />   </button>
                <button><HiOutlineShoppingBag /></button>
                </div>
                
        
            </nav>
            </>
    )

}

export default Navbar;