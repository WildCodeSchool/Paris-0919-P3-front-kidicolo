
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './DisplaySub.css'

const DisplaySub = ({ subcategorys }) => {
  const id = subcategorys
  const [select, setSelect] = useState()
  const [subCategories, setSubbCategories] = useState()
  console.log(subcategorys);

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  useEffect(() => {
    const axiosData = async url => {
      const res = await axios.get(url)
      setSelect(res.data)
      console.log(res)
    }

    const axiosSubCategory = async url => {
      const res = await axios.get(url)
      setSubbCategories(res.data)
    }
  axiosData('')
    axiosSubCategory('http://localhost:5000/subcategory/:id')
  }, [])
  console.log(subCategories)
  return (
    <div className="main-container">

      {/* <div>
            <Link to={`/displayarticle/${id}`}>
              <h1>{subcategorys.name}</h1>
            </Link>
          </div> */}

    <div className="form-group dropmenu">
      <select className="custom-select text-center menu ml-auto mr-auto" name="category" onChange={(e) => handleChange(e)}>
        <option selected>Sélectionner une catégorie</option>
        {subcategorys && subcategorys.map(subCat => {
          return(
            <>
            <option value={subCat.id}>{subCat.name}</option>
            </>
          )
        })}

      </select> 
      </div>
                {/* <input type="button" value="Valider" onClick={() => setChosen(true)} /> */}
    </div>
  );
}


export default DisplaySub;
