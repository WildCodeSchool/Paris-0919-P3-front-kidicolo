
import React from 'react';
import './Homepage.css';
import logo from '../../assets/img/homepage/logo.png';


export class Homepage extends React.Component {
    render() {
        return (
            <div className="mainContainer">
               {/* <img className="logo" src={logo} alt="Logo"/> */}

                <div className="box1">
                    <h1>Vêtements box1</h1>
                </div>

                <div className="box2">
                    <h1>Jeux/Jouets box2</h1>
                </div>

                <div className="box3">
                    <h1>Education box3</h1>
                </div>

                <div className="box4">
                    <h1>Puériculture box4</h1>
                </div>
            <div>
        )
    }
}

export default Homepage
