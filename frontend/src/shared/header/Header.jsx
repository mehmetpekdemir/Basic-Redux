import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Blog App</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blog List</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Header;
