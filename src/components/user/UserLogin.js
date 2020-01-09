import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UserSettings.css";
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
      <div>
        <form className="formclass" onSubmit={this.handleSubmit}>
        Mail:
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
      <button  type="submit">Log !</button>
        </form>
      </div>
    );
  }
}
export default withRouter(UserLogin);
