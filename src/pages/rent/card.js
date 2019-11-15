import React, { Component } from 'react'
import Test from '../../test.jpeg'
import './card.css'

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.picture} alt="Smiley face"/>
                <span className="dress-name">Negro</span>
                <span className="price">$47.99</span>
                
            </div>
        )
    }
}

export default Card
