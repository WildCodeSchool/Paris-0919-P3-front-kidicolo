import React from 'react';
import './Homepage.css';
import logo from '../../assets/img/homepage/logo.png';

export class Homepage extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="kidiLogo">
                    <img className="logo" src={logo} alt="Logo"/>
                </div>

                <div className="accessCategory">

                </div>
            </div>
        )
    }
}

export default Homepage
