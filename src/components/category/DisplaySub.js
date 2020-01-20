
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './DisplaySub.css'

const DisplaySub = ({ subcategorys }) => {
<<<<<<< HEAD

=======
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
>>>>>>> dropMenuCss
  return (
    <div className="main-container">

<<<<<<< HEAD
          <div>
              <Link to={`/displayarticle/${subcategorys.id}`}>
              <h1>{subcategorys.name}</h1>
              </Link>
          </div>
          </div>
        );
      }
=======
      {/* <div>
            <Link to={`/displayarticle/${id}`}>
              <h1>{subcategorys.name}</h1>
            </Link>
          </div> */}

    <div className="formfield-select">
      <label for="select">Choisissez</label>
      <div className="formfield-select--container">
      <select id="select" onChange={(e) => handleChange(e)}>
        {subcategorys && subcategorys.map(subCat => {
          return(
            <>
            <option className="list" value={subCat.id}>{subCat.name}</option>
            </>
          )
        })}

      </select> 
      </div>
                {/* <input type="button" value="Valider" onClick={() => setChosen(true)} /> */}
    </div>
    </div>
  );
}
>>>>>>> dropMenuCss


export default DisplaySub;
