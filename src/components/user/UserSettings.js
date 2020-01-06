import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class UserSettings extends Component {
  state = {
     user:{
    firstname: "",
    lastname: "",
    mail: "",
    mobile: "",
    address: "",
    password: "",
    photo_user: "",},
  };
  /////////AXIOS GET USER /////////
  getUser() {
    axios.get(`/adduser/getinfo/21`).then(res => {
      this.setState({ user: res.data[0] });
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
      <div>
        <form className="formClass" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Your Firstname"
            value={this.state.user.firstname}
            type="text"
            name="firstname"
          />
          <input
            value={this.state.user.lastname}
            type="text"
            name="lastname"
            onChange={this.handleChange.bind(this)}
            placeholder="Your Lastname"
          />
          <input
            value={this.state.user.mail}
            type="text"
            name="mail"
            onChange={this.handleChange.bind(this)}
            placeholder="Your email"
          />
          <input
            value={this.state.user.password}
            type="text"
            name="password"
            onChange={this.handleChange.bind(this)}
            placeholder="Your Password"
          />
          <input
            value={this.state.user.mobile}
            type="text"
            name="mobile"
            onChange={this.handleChange.bind(this)}
            placeholder="Enter your mobile number"
          />
          <input
            value={this.state.user.address}
            type="text"
            name="address"
            onChange={this.handleChange.bind(this)}
            placeholder="Enter your address"
          />
          <input
            value={this.state.user.photo_user}
            type="text"
            name="photo_user"
            onChange={this.handleChange.bind(this)}
            placeholder="Enter the url of the photo"
          />
          <input className="submitButton" type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default withRouter(UserSettings);
