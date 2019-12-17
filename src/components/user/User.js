import React, { Component } from "react";
import axios from "axios";
import UserDisplay from "./UserDisplay"

class User extends Component {
  state = {
    user: []
  };


  getUser() {
    axios.get(`/adduser/getinfo/21`)
    .then(res => {
      this.setState({user : res.data})
    });
  }
  componentDidMount(){
    this.getUser()
  }
  render() {
    console.log(this.state.user)
    return (
      <div>
        <div className="containerUser">
          {this.state.user.map(users =>(
            < UserDisplay users={users} key={users.id} />
          ))
          }
        </div>
      </div>
    );
  }
}
export default User;