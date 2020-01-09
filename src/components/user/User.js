import React, { Component } from "react";
import axios from "axios";
import UserDisplay from "./UserDisplay"
import { Link, withRouter } from 'react-router-dom';

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
            < UserDisplay  users={users} key={users.id} />
          ))
          }
        </div>
        <div className="containerUserSettings"> 
          <Link to="/settingsuser"><button>Settings</button></Link>
          <Link to= "/usersignup"><button>Inscription</button></Link>
          <Link to= "/homepage">go</Link>
        </div>
      </div>
    );
  }
}
export default withRouter(User);