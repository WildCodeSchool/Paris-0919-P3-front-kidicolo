import React, { Component } from "react";
import {Link, withRouter } from "react-router-dom";

class UserSignup extends Component {
  state = {
    firstname: "",
    lastname: "",
    mail: "",
    mobile: "",
    address: "",
    password: "",
    photo_user: "",
  };




  ////////////FONCTION POUR RECUP LA VALUE DE NAME PUIS STOCKER DS LA STATE ////////////
  handleChange = (event) =>  {
    this.setState({[event.target.name]: event.target.value });
  }
  ///////AXIOS PUT USER /////////
  handleSubmit = e => {
    fetch("/adduser/signup", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
    e.preventDefault();
  };

  /////////////////////////////////////////////////////////
  render() {
    console.log(this.state);
    return (
      <div className="containerSettings">
        <form className="formClass" onSubmit={this.handleSubmit}>
        Firstname:
          <input
            onChange={this.handleChange}
            placeholder="Your Firstname"
            type="text"
            name="firstname"
          />
          Lastname:
          <input
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Your Lastname"
          />
          Email:
          <input
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Your email"
          />
          Password:
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Your Password"
          />
          PasswordBiss:
          <input
            type="password"
            name="passwordbiss"
            onChange={this.handleChange}
            placeholder="Your Password"
          />

          Mobile:
          <input
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Enter your mobile number"
          />
          Address:
          <input
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="Enter your address"
          />
          Photo:
          <input
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="Enter the url of the photo"
          />
          <img src = {this.state.photo_user} alt = "userphoto" />
          <input className="submitButton" type="submit" value="Signup" />
        </form>
        <Link to="/userlogin">I have not account ?</Link>
      </div>
    );
  }
}

export default withRouter(UserSignup);