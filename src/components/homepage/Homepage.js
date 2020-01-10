import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

// const Homepage = () => {
//   const ids = ["Vetements", "Puericulture", "Jeux&Jouets", "Education"];
//   return (
//     <div className="mainContainer">
//       {ids.map(id => {
//         return (
//           <div>
//             <Link to={`/categorie/${id}`}>
//               <h1>{id}</h1>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

/// possibilité de stylisé chaque  Link  suppression du map)
const Homepage = () => {
  const id = ["Vetements", "Puericulture", "Jeux&Jouets", "Education"];
  return (
    <div className="mainContainer">
       {id.map((id, index) => {
        return (
          <NavLink className={`box${index}`} to={`/categorie/${id}`}>
            <h1>{id}</h1>
          </NavLink>
        );
      })}


        {/* <NavLink className="box1" to={`/categorie/${id[0]}`}><h1>Vetements</h1></NavLink>
        <NavLink className="box2" to={`/categorie/${id[1]}`}><h1>Puericulture</h1></NavLink>
        <NavLink  className="box3" to={`/categorie/${id[2]}`}><h1>Jeux/Jouets</h1></NavLink>
        <NavLink className = "box4" to={`/categorie/${id[3]}`}><h1>Education</h1></NavLink> */}
    </div>
  );
};

export default Homepage;
