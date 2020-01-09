import React from "react";
import "./DisplaySubcategorie.css";

const DisplaySubcategorie = subcategorys => {
  return (
    <div className="globalCont">
      <img className="icone" src="../../assets/img/iconeHD.svg" alt="icone"/>
      <div className="containerSubcategory">
        <p className="subcategory">{subcategorys.subcategorys.name}</p>
      </div>
    </div>
  );
};

export default DisplaySubcategorie;
