import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <section id="header">
      <Link to="/home">
        <img src="logo.png" alt="" />
      </Link>

      <div>
        <ul id="navbar">
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              Contact
            </NavLink>
          </li>
          <li id="lg-bag">
            <NavLink
              to="/cart"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              <i className="fas fa-shopping-bag"></i>
              <span className="action_name"></span>
              <span className="bag-item-count">{bag.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              id="close"
              className={(navData) => (navData.isActive ? "active-style" : "none")}
            >
              <i className="fa-solid fa-xmark"></i>
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="mobile">
        <NavLink
          to="/cart.html"
          className={(navData) => (navData.isActive ? "active-style" : "none")}
        >
          <i className="fa fa-shopping-bag"></i>
        </NavLink>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
};

export default Header;
