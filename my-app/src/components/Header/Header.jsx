import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <div>
    <span>Header</span>
    <NavLink to={"/"}>Posts</NavLink>
    <NavLink to={"/about"}>About</NavLink>
    <NavLink to={"/contact"}>Contact</NavLink>
  </div>
);
export default Header;
