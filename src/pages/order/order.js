import React, { Component } from 'react'
import Logo from '../../logo.png'
import Profile from '../../profile.png'
import {Link} from 'react-router-dom'
import Test from '../../test.jpeg'
import './order.css';

export default class Order extends Component {
    render() {
        return (
            <div className="o-container">
                <div className="r-navbar">
                    <Link to="/">
                        <img src={Logo} alt="Smiley face" />
                    </Link>
                    <Link to="/">
                        <span>Acerca</span>
                    </Link>
                    <span>Rentar</span>
                    <span>Explorar</span>
                    <div className="profile">
                        <img src={Profile} alt="Smiley face" />
                        <span className="username">pauchag</span>
                    </div>
                </div>

                <div className="checkout">
                    <div className="first-image">
                        <img src={Test} alt="Smiley face"/>
                    </div>
                    <div className="second-image">
                        <img src={Test} alt="Smiley face"/>
                    </div>
                    <div className="info">

                    <ul>
                            <li>
                                Tipo
                            </li>
                            <li>
                                Precio
                            </li>
                            <li>
                                Tamaño
                            </li>
                            <li>
                                Marca
                            </li>
                            <li>
                                Descripción
                            </li>
                        </ul>


                        <button className="button-check">Rentar</button>

                    


                    </div>

                </div>
            </div>
        )
    }
}
