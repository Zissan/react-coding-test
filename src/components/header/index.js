import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          Employee Portal
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new" className="btn btn-flat">
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
