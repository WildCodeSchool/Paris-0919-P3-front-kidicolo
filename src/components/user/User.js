import React, { Component } from "react";
import axios from "axios";
import UserDisplay from "./UserDisplay"
import { withRouter } from 'react-router-dom';

class User extends Component {
  state = {
    user: []
  };


  getUser() {
    axios.get(`/adduser/getinfo/1`)
    .then(res => {
      this.setState({user : res.data})
    });
  }
  componentDidMount(){
    this.getUser()
  }
  render() {
    return (
      <div>
          {this.state.user.map(users =>(
            < UserDisplay  users={users} key={users.id} />
          ))
          }
      </div>
    );
  }
}
export default withRouter(User);