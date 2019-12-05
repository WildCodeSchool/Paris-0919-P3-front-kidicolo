import React, { useState } from "react";
import "./ProfilConnexion.css";
import  { Link } from 'react-router-dom'
// import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
// import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return state
}

const ProfilConnexion = () => {
    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);

    // checkDB = () => {
    //     const test = {
    //         mail: {mail},
    //         password: {password},
    //     }
    //     axios.post('http://localhost:4000/api/user/signin', test)
    //         .then(res => {
    //             if (res.data === 'Logged in successfully') {
    //                 const action = { type: 'LOG', value: this.state.mail }
    //                 this.props.dispatch(action)
    //                 this.redirect()
    //             }
    //         }
    //         )
    // }
    // redirect = () => {
    //     this.props.history.push('/Home')
    // }


    // <input onClick={() => this.checkDB()} type="submit" id="login-button" value="Valider" />


    return (
        <div className="containerProfilConnexion">
            <div className="logoKidicolo"><h1>KIDICOLO</h1></div>
            <div>
                <p className="connexionProfilInscription">Connexion</p>
            </div>


            <div className="containerForm">
                <div className="form">

                    <input className="Connect_input" type="email" placeholder="Email"
                        onChange={(e) => setMail( e.target.value )} ></input>

                    <input className="Connect_input" type="password" placeholder="Mot de passe"
                        onChange={(e) => setPassword( e.target.value )} ></input>

                    <input type="submit" id="login-button" value="Valider" />
                    <div className="passwordForgot"><Link to ='#'><p className="pwForgot">Mot de passe oublié ?</p></Link></div>
                </div>

                <div className="newUser"><Link to='ProfilInscription'><button id="buttonNewUser">C'est la première fois ? <br/> Cliquez ici !</button></Link></div>

            </div>


        </div>
    )
}


export default ProfilConnexion;