import React from "react";
import "./usercss/UserDisplay.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/homepage/logo.png";

const UserDisplay = users => {
  return (

    <div>
          <img className="logoKidicolo" src={logo} />

        <img
          class="imgUserProfile"
          src={users.users.photo_user}
          alt="Card image cap"
        />
        <div class="">
          <h1 class="">
            {users.users.firstname} {users.users.lastname}{" "}
          </h1>
          <div className="buttonUserProfile">
            <Link to="/settingsuser">
              <button className="btn btn-info"> Seetings</button>
            </Link>
            <Link to="/userarticle">
              <button className=" btn btn-info">My Dressing</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default UserDisplay;
