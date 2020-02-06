import React from "react";
import "./usercss/UserDisplay.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/Logo_Transparant4.png";

const UserDisplay = users => {
  return (
    <div className= 'containerPageUserDisplay'>
    <div className='containerCardProfil '>
      <img src={Logo} className="logoK" alt="Logo Kidicolo" />

      <img
        className="imgUserProfile"
        src={users.users.photo_user}
        alt="Card image cap"
      />
      <div className="">
        <h1 className="nameUser">
          {users.users.firstname} {users.users.lastname}{" "}
        </h1>
        <div className="buttonUserProfile">
          <Link to="/settingsuser">
            <button className="btn p-3 btn-dark">Paramètres</button>
          </Link>
          <Link to="/userarticle">
            <button className=" btn p-3 btn-info">Mes articles</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserDisplay;
