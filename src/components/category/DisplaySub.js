import React from "react";
import { Link } from "react-router-dom";

const DisplaySub = ({ subcategorys }) => {
   const id = ["Chaussure",""]
  console.log(subcategorys);
  return (
    <div className="containerSubcategory">

          <div>
            <Link to={`/displayarticle/${id}`}>
              <h1>{subcategorys.name}</h1>
            </Link>
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
