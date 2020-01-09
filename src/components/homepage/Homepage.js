import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const names = ["Vêtements", "Puericulture", "Jeux/Jouets", "Education"];
  return (
    <div>
      {names.map(name => {
        return (
          <Link to={`/subcategorie/${name}`}>
            <h1>{name}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Homepage;
