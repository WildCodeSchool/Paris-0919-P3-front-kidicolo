import React from "react";
import { Link } from "react-router-dom";

const DisplaySub = ({ subcategorys }) => {
  return (
    <div className="containerSubcategory">
      <div>

              <Link to={`/displayarticle/${subcategorys.id}`}>
                {subcategorys.name}
              </Link>

      </div>
    </div>
  );
};

export default DisplaySub;
