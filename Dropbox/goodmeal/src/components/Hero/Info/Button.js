import {ButtonReservation} from './InfoStyled';
import React, { Component } from 'react';

class Button extends Component {
    clickAction =()=>{
        if(this.props.text === 'Book now!'){
            this.props.handleColor();
            this.props.handleClick();
        }
        this.props.handleClick();
        
    }
    render() {
        return (
            <ButtonReservation onClick={this.clickAction} marg={this.props.marg} color={this.props.color}>
                {this.props.text}
            </ButtonReservation>
        );
    }
}

export default Button;