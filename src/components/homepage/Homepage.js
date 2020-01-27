import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";
import RechercheBS from "./RechercheBS";



const Homepage = () => {
  const id = ["Vetements", "Puericulture", "Jeux & Jouets", "Education"];
  return (
    <div>
      <RechercheBS />
    <div className="mainContainer">
       {id.map((id, index) => {
        return (
          
          <NavLink className={`box${index}`} to={`/categorie/${id}`}>
            <h3 className="NavlinksCategorie">{id}</h3>
          </NavLink>
          
        );
      })}
    </div>
    </div>
  );
};

export default Homepage;
