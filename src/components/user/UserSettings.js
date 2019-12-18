import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class UserSettings extends Component {
  state = {
    firstname: null,
    lastname: null,
    mail: null,
    mobile: null,
    address: null,
    password: null,
    photo_user: null,
    user : []
  };
  /////////AXIOS GET USER /////////
  getUser() {
    axios.get(`/adduser/getinfo/21`).then(res => {
      this.setState({ user: res.data });
    });
  }
  componentDidMount() {
    this.getUser();
  }
  ////////////FONCTION POUR RECUP LA VALUE DE NAME PUIS STOCKER DS LA STATE ////////////
  updateField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
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
    console.log(this.state.user)
    return (
      <div>
         
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.user.firstname}
            type="text"
            name="firstname"
            onChange={this.updateField}
          />
          <input
            // value={}
            type="text"
            name="lastname"
            onChange={this.updateField}
            placeholder="Your Lastname"
          />
          <input
            // value={}
            type="mail"
            name="mail"
            onChange={this.updateField}
            placeholder="Your email"
          />
          <input
            // value={}
            type="password"
            name="password"
            onChange={this.updateField}
            placeholder="Your Password"
          />
          <input
            // value={}
            type="mobile"
            name="mobile"
            onChange={this.updateField}
            placeholder="Enter your mobile number"
          />
          <input
            // value={}
            type="address"
            name="address"
            onChange={this.updateField}
            placeholder="Enter your address"
          />
          <input
            // value={}
            type="photo_user"
            name="photo_user"
            onChange={this.updateField}
            placeholder="Enter the url of the photo"
          />
          <input className="submitButton" type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default withRouter(UserSettings);
