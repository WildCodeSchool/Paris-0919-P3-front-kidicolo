import React from 'react';
import './UserDisplay.css'

const UserDisplay = users => {
    console.log(users)
     return (
         <div className="containerUser">
                <img src = {users.users.photo_user} alt="lol"/>
                <p>{users.users.firstname} {users.users.lastname}</p> 
                <p>{users.users.address}</p>
                <p>{users.users.mobile}</p>
                <p>{users.users.mail}</p>
        </div>
     )
}


export default UserDisplay