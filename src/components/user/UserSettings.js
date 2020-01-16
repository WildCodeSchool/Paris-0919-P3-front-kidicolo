import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import "./usercss/UserSettings.css"

class UserSettings extends Component {
  state = {
    firstname: "",
    lastname: "",
    mail: "",
    mobile: "",
    address: "",
    password: "",
    photo_user: "",
  };
  /////////AXIOS GET USER /////////
  getUser() {
    axios.get(`/adduser/getinfo/21`).then(res => {
      this.setState({...res.data[0] });
      console.log(res.data[0]);
    });
  }

  componentDidMount() {
    this.getUser();
  }

  ////////////FONCTION POUR RECUP LA VALUE DE NAME PUIS STOCKER DS LA STATE ////////////
  handleChange = (event) =>  {
    this.setState({[event.target.name]: event.target.value });
  }
  ///////AXIOS PUT USER /////////
  handleSubmit = e => {
    fetch("/adduser/switch/21", {
      method: "PUT",
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
        Fisrtname:
          <input
            onChange={this.handleChange}
            placeholder="Your Firstname"
            value={this.state.firstname}
            type="text"
            name="firstname"
          />
          Lastname:
          <input
            value={this.state.lastname}
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Your Lastname"
          />
          Email:
          <input
            value={this.state.mail}
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Your email"
          />
          Password:
          <input
            value={null}
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Your Password"
          />
          Mobile:
          <input
            value={this.state.mobile}
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Enter your mobile number"
          />
          Address:
          <input
            value={this.state.address}
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="Enter your address"
          />
          Photo:
          <input
            value={this.state.photo_user}
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="Enter the url of the photo"
          />
          <img src = {this.state.photo_user}  alt="photouser"/>
          <input className="submitButton" type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default withRouter(UserSettings);
