
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

    <div className="dropdown-container dropdown-solid">
      <div className="dropdown-toggle click-dropdown">Choisissez</div>
      <select className="dropdown-menu" onChange={(e) => handleChange(e)}>
        {subcategorys && subcategorys.map(subCat => {
          return(
            <>
            <option className="list" value={subCat.id}>{subCat.name}</option>
            </>
          )
        })}

      </select> 
                {/* <input type="button" value="Valider" onClick={() => setChosen(true)} /> */}
    </div>
    </div>
  );
}


// const Homepage = () => {
//   const ids = ["Vetements", "Puericulture", "Jeux&Jouets", "Education"];
//   return (
//     <div className="mainContainer">
//       {subcategory.map(subcategorys => {
//         return (
//           <div>
//             <Link to={`/subcategorie/${id}`}>
//               <h1>{id}</h1>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default DisplaySub;
