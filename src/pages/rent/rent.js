import React, { Component } from 'react'
import axios from 'axios';
import Logo from '../../logo.png'
import Profile from '../../profile.png'
import Test from '../../test.jpeg'
import { Card } from './card.js'
import './rent.css';
import { Link } from "react-router-dom";

export class Rent extends Component {
    state = {
        order:false,
        dresses:[],
        picture:""
    } 

    componentDidMount(){
        console.log('Hola')
        this.getDresses()
    }

    getDresses=()=>{
        axios.get('http://vestidos.herokuapp.com/dress')
        .then(response => {
            this.setState({
                dresses:response.data.dresses
            })
        })
    }

    renderDresses=()=>{
        console.log(this.state.dresses)
        return this.state.dresses.map(dress => {
            return( 
                <div>
                    <button onClick={()=>this.showOrder(dress.picture)}>
                            <Card picture={dress.picture}/>
                    </button>
                </div>
            )
        })
    }

    showOrder=(picture)=>{
        this.setState({
            order:!this.state.order,
            picture:picture
        })
    }

    displayOrder = () => {
        if(this.state.order){
            return(
                <div className="o-container">
                    <div className="r-navbar">
                        <Link to="/">
                            <img src={Logo} alt="Smiley face" />
                        </Link>
                        <Link to="/">
                            <span>Acerca</span>
                        </Link>
                        <span onClick={this.showOrder}>Rentar</span>
                        <span>Explorar</span>
                        <div className="profile">
                            <img src={Profile} alt="Smiley face" />
                            <span className="username">pauchag</span>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="first-image">
                            <img src={this.state.picture} alt="Smiley face"/>
                        </div>
                        <div className="second-image">
                            <img src={this.state.picture} alt="Smiley face"/>
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

    showDresses=()=>{
        const self = this;
        if(!this.state.order){
            return(
                <div>
                    <div className="r-navbar">
                        <Link to="/">
                            <img src={Logo} alt="Smiley face" />
                        </Link>
                        <Link to="/">
                            <span>Acerca</span>
                        </Link>
                        <span onClick={this.showRentar}>Rentar</span>
                        <span>Explorar</span>
                        <div className="profile">
                            <img src={Profile} alt="Smiley face" />
                            <span className="username">pauchag</span>
                        </div>
                    </div>

                    <div className="rent-container">

                        <div className="left">
                            <span className="left-header">Tipo</span>
                            <ul>
                                <li>Vestidos cortos</li>
                                <li>Vestidos a media pierna</li>
                                <li>Vestidos largos</li>
                                <li>Vestidos bodycon</li>
                                <li>Vestidos de fiesta</li>
                                <li>Vestidos de encaje</li>
                                <li>Camisetas tipo vestidos</li>
                                <li>Vestidos con lentejuelas</li>
                                <li>Vestidos cruzados</li>
                                <li>Vestidos skater</li>
                                <li>Vestidos tio sueter</li>
                                <li>Jumpsuits</li>

                            </ul>

                            <span className="left-header">Marca</span>
                            <ul>
                                <li>Alfredo Martinez</li>
                                <li>Armando Takeda</li>
                                <li>Kris Goyri</li>
                                <li>Alersundi</li>
                                <li>Johanna Ortiz</li>
                                <li>Carolina Herrera</li>
                                <li>Gucci</li>
                                <li>Ralph Lauren</li>
                                <li>Prada</li>
                                <li>Chanel</li>

                            </ul>

                        </div>

                        <div className="dresses-container">
                        {
                            self.renderDresses()
                        }
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="r-top-container">
                {
                    this.showDresses()
                }
                {
                    this.displayOrder()
                }
            </div>
        )
    }
}

export default Rent
