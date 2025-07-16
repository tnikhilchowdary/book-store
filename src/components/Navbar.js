import React, { useContext } from "react";
import { FaSearch } from 'react-icons/fa';
import Logo from "../assets/Logo.png";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "./CartContext";
import CartPage from "../pages/CartPage";


const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useContext(cartContext);

  return (
    <div className="navbar">
      
      
      <div className="navbar-left icon-bar">
        <img src={Logo} alt="Logo" className="logo" />
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/programmming" className="nav-link">Programming</NavLink>
        <NavLink to="/technology" className="nav-link">Technology</NavLink>
        <NavLink to="/communications" className="nav-link">Communications</NavLink>
        <NavLink to="/inventions" className="nav-link">Inventions</NavLink>
      </div>


      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search Books..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

  
      <div className="navbar-right icon-bar">
        <NavLink to="/profile" className="nav-icon">
          <CgProfile size={24} />
        </NavLink>

        <NavLink to="/cart" className="nav-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">{cartItems.length}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

