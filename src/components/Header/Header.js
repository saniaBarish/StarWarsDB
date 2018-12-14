import React from "react";
import { Link } from "react-router-dom"

import "./Header.css";

const Header = () => {
    return (
      <div className="header d-flex">
        <h3>
          <Link to="/">StarWars DB</Link>
        </h3>
        <ul className="d-flex">
          <Link to="/person/" >
            <li>Person</li>
          </Link>
          <Link to="/planet/" >
            <li>Planets</li>
          </Link>
          <Link to="/starship/" >
            <li>Starships</li>
          </Link>
        </ul>
      </div>
    );
};
  
export default Header;
  