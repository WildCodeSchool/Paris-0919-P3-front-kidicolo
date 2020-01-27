import React from "react";
import "./usercss/UserDisplay.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/homepage/logo.png"

const UserDisplay = users => {
  return (
    <div className="containerUserDisplay">
      <img className = "logoKidicolo" src  = {logo} alt="Logokidicolo" />
      <div className="formClassUser">
        <img
          className="imgUserProfile"
          src={users.users.photo_user}
          alt="lol"
        />
        <h1>
          Bonjour !
          <br></br>
          {users.users.firstname} {users.users.lastname}
        </h1>
        <div className="buttonUserProfile">
        <Link to="/settingsuser">
          <button className="buttonSetting"></button>
        </Link>
        <Link to="/userarticle">
          <button className="buttonArticle"></button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDisplay;
