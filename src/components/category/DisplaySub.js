import React from "react";
import { Link } from "react-router-dom";

const DisplaySub = ({ subcategorys }) => {

  return (
    <div className="containerSubcategory">

          <div>
              <Link to={`/displayarticle/${subcategorys.id}`}>
              <h1>{subcategorys.name}</h1>
              </Link>
          </div>
          </div>
        );
      }


export default DisplaySub;
