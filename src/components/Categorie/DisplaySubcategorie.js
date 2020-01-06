import React from "react";
import "./DisplaySubcategorie.css";

const DisplaySubcategorie = subcategorys => {
  return (
    <div className="globalCont">
      <div className="containerSubcategory">
        <p className="subcategory">{subcategorys.subcategorys.name}</p>
      </div>
    </div>
  );
};

export default DisplaySubcategorie;
