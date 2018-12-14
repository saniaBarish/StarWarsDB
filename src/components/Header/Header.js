import React from "react";
import { Link } from "react-router-dom"

import "./Header.css";

const Header = ({homePage}) => {
    return (
      <div className="header d-flex">
        <h3>
          <Link to={`${homePage}/`}>StarWars DB</Link>
        </h3>
        <ul className="d-flex">
          <Link to={`${homePage}/person/`} >
            <li>Person</li>
          </Link>
          <Link to={`${homePage}/planet/`} >
            <li>Planets</li>
          </Link>
          <Link to={`${homePage}/starship/`} >
            <li>Starships</li>
          </Link>
        </ul>
      </div>
    );
};
  
export default Header;
  