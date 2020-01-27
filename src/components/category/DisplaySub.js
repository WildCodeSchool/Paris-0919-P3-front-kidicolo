import React  from "react";
import "./DisplaySub.css";


const DisplaySub = ({ subcategorys, handleChange }) => {
  const id = subcategorys;
  console.log('subcat id',id);
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

// useEffect(() => {
  // const axiosData = async url => {
  //   const res = await axios.get(url);
  //   setSelect(res.data);
  //   console.log(res);
  // };

  // const axiosSubCategory = async url => {
  //   const res = await axios.get(url);
  //   setSubbCategories(res.data);
  // };

  // const axiosArticle = async url => {
  //   const res = await axios.get(url);
  //   setArticle(res.data);
  // };
  // axiosData(`http://localhost:5000/article/subcat/${id}`);
  // axiosSubCategory("http://localhost:5000/subcategory/:id");
  // axiosArticle("http://localhost:5000/subcat/:id");
// }, []);