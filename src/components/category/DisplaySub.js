import React  from "react";
import "./DisplaySub.css";


const DisplaySub = ({ subcategorys, handleChange }) => {
  const id = subcategorys;
  return (
    <div className="main-container">
      <div className="form-group dropmenu">
        <select
          className="custom-select text-center menu ml-auto mr-auto"
          name="category"
          onChange={(e) => handleChange(e.target.value)}
          >
          <option selected>Sélectionner une catégorie</option>
          {subcategorys &&
            subcategorys.map(subCat => {
              return (
                <>
                  <option value={subCat.id}>{subCat.name}</option>
                </>
              );
            })}
        </select>
      </div>

    </div>
  );
};

export default DisplaySub;
