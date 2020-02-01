import React from "react";
import Logo from "../../assets/img/logo/Logo_Transparant4.png";
import "./RechercheBS.css";
import "./Homepage.css";

const RechercheBS = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={Logo}
          className="navbar-brand logoKidicoloSearchBar"
          alt="logo Kidicolo"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </div>
  );
};

export default RechercheBS;
