import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './jumbotron.css';
import Logo from '../../logo.png'
import Profile from '../../profile.png'
import { Link } from "react-router-dom"


export class Jumbotron extends Component {
    render() {
        return (
            <div className="top-container">
                <div className="black-layer"></div>
                <div className="navbar">
                    <img src={Logo} alt="Smiley face" />
                    <Link to="/">
                    <span>Acerca</span>
                    </Link>
                    <Link to="/rent">
                        <span>Rentar</span>
                    </Link>
                    <span>Explorar</span>
                    <div className="profile">
                        <img src={Profile} alt="Smiley face" />
                        <span className="username">pauchag</span>
                    </div>
                </div>
                <div className="header-container">

                    <div className="jumbo-container">
                        <p>Renta de vestidos para cualquier ocasión</p>
                        <button>Empezar</button>
                    </div>

                </div>

                <footer className="footer-distributed">
                    <div className="footer-left">

                        <p className="footer-links">
                            <a >Privacidad</a>

                            <a >Término de Uso</a>

                            <a >Tarjeta de Regalo</a>


                            <a href="mailto:gabriel@discussthegame.com?Subject=Contact" target="_top">Contacto</a>
                        </p>

                        <p className="copy">FLECHÉ &copy; 2019</p>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Jumbotron
