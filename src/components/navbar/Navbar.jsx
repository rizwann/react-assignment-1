import React from "react";
import { NavLink} from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" >
          React Assignment <span style={{color:"#3d91db"}}>1</span>
        </NavLink>
       
       
      </div>
    </nav>
  );
};

export default Navbar;