import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logoK.png";
import "./usercss/UserLogin.css";
import axios from "axios";

class UserLogin extends Component {
  state = {
    mail: "",
    password: "",
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    const user = {
      mail: this.state.mail,
      password: this.state.password
    };
    axios.post("adduser/login", user)
    .then(res => {
      localStorage.setItem("token", res.headers.token); // requireAuth et notNoth
      document.location.reload(true);
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="containerLogin">
        <img src={Logo} className="logoK" alt="Logo Kidicolo" />
        <form className="formClassLogin">
          Mail
          <input
            className="inputLogin"
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Your email"
          />
          Mot de passe
          <input
            className="inputLogin"
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Your Password"
          />
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btnSeconnecter"
          >
            Se connecter !
          </button>
          <Link to="/usersignup">
            <button className="btnPasDeCompte"> Je n'ai pas de compte ?</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default withRouter(UserLogin);
