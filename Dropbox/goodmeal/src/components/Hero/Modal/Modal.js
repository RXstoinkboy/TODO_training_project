import React from 'react';
import { BlackShade, Wrapper } from './ModalStyle';
import Flatpickr from 'react-flatpickr';
import Button from '../Info/Button';
import 'flatpickr/dist/themes/light.css';
import Fade from 'react-reveal';
import {Link} from 'react-router-dom';

const Modal =props=> {
    return (
        <BlackShade>
            <Fade bottom>
                <Wrapper style={{fontFamily:"'Lato', sans-serif"}}>
                    <h1 style={{fontFamily: '"Kaushan Script", cursive'}}>Reservation</h1>
                    <p>Please call us:</p>
                    <p>012-3456-789-901</p>
                    <p>or use our reservation form:</p>
                    <Flatpickr 
                        style={{
                            margin:'1rem', 
                            padding: '.5rem', 
                            color: 'var(--mainColor)', 
                            border: '1px solid var(--mainColor)', 
                            fontSize:'1rem'}}
                        value={props.date}
                        onChange={props.handleChange}
                        options={{minDate: props.currentDate}} />
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <Button handleClick={props.handleClick} text='Close' marg>{props.children}</Button>
                        <Link to='/contact'>
                            <Button handleClick={props.handleClick} color={props.color} handleColor={props.handleColor} text='Book now!' marg>{props.children}</Button>
                        </Link>
                    </div>
                </Wrapper>
            </Fade>
        </BlackShade>
    );
};

export default Modal;