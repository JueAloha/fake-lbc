import React from "react";
import { Link } from "react-router-dom";
import "./theme.css";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7d/Leboncoin.fr_Logo_2016.svg/1280px-Leboncoin.fr_Logo_2016.svg.png"
                alt="Logo LBC"
              />
            </Link>
          </li>
          <li>DÉPOSER UNE ANNONCE</li>
          <li>OFFRES</li>
          <li>DEMANDES</li>
          <li>MES FAVORIS</li>
          <li>BOUTIQUES</li>
          <li>MESSAGES</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
