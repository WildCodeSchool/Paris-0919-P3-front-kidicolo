
import React from 'react';
import './Homepage.css';
import logo from '../../assets/img/homepage/logo.png';
import { Link, Route } from 'react-router-dom';


export class Homepage extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                {/* <img className="logo" src={logo} alt="Logo"/> */}
                
                <Link to="/categorie"className="box1">
                    <h1>Vêtements box1</h1>
                </Link>

                <Link to="/categorie"className="box2">
                    <h1>Jeux/Jouets box2</h1>
                </Link>

                <Link to="/categorie" className="box3">
                    <h1>Education box3</h1>
                </Link>

                <Link to="/categorie"className="box4">
                    <h1>Puériculture box4</h1>
                </Link>
                <div>

                </div>
            </div>
        )
    }
}

export default Homepage
