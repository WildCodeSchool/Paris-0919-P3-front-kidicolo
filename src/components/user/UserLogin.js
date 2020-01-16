import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from '../../assets/img/logo/logoK.png'
import "./usercss/UserLogin.css"
import axios from "axios";

class UserLogin extends Component {
  state = {
    mail: "",
    password: "",
  };

  handleChange = (event) =>  {
    this.setState({[event.target.name]: event.target.value });
  }

  handleSubmit = (e) => {
    axios.post("adduser/login" , {
      mail:this.state.mail,
      password: this.state.password
    }).then(res=> {
      console.log(res)
    })
      e.preventDefault();
  }

  render() {
    console.log(axios)
    return (
      
      <div className="containerLogin">
        <img src={Logo} className="logoK" />
        <form className="formClassLogin" onSubmit={this.handleSubmit}>
        Mail
          <input className="inputLogin"
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Your email"
          />
          Mot de passe
          <input className="inputLogin"
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Your Password"
          />
      <Link to="/user"><button  type="submit" className="btnSeconnecter">Se connecter !</button></Link>
      <Link to="/usersignup" ><button className="btnPasDeCompte"> Je n'ai pas de compte ?</button></Link>
        </form>
      </div>
      
    );
  }
}
export default withRouter(UserLogin);
