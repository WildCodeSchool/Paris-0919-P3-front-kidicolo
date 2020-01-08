import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UserSettings.css";
import axios from "axios";

class UserLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event) =>  {
    this.setState({[event.target.name]: event.target.value });
  }

  handleSubmit = (e) => {
    axios.post("/auth/login" , {
      email:this.state.email,
      password: this.state.password
    }).then(res=> {
      console.log(res)
    }
      )
  }

  render() {
    return (
      <div>
        <form className="formclass" onSubmit={this.handleSubmit}>
        Email:
          <input
            type="text"
            name="email"
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
          <button type="submit">Log !</button>
        </form>
      </div>
    );
  }
}
export default withRouter(UserLogin);
