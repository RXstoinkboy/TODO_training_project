import {Title, Subtitle, Header, ParallaxImage} from './HeroStyle';
import InfoSection from './Info/Info';
import {Specialities} from './Specialites/Specialities';
import Menu from './Menu/Menu';
import heroImg from '../../img/hero.jpg';
import Fade from 'react-reveal';

import React, { Component } from 'react';

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
            transform: 0,
        }
    }
    handleScroll =()=>{
        const height = window.scrollY;
        window.requestAnimationFrame(()=>{
            this.setState({
                transform: (0.5 * height).toFixed(0)
            })
        })
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    

    render() {
        const charPoses = {
            enter: {
                opacity: 1,
                y: 0,
                delay: ({charIndex}) => charIndex*30
            },
            exit: {
                opacity: 0,
                y: 20
            }
        }

        return (
            <Content 
                charPoses={charPoses} 
                {...this.state}
                {...this.props}
                />
        );
    }
}

export default Hero;

const Content = props => {
    return (
        <React.Fragment>
            <Header>
                <ParallaxImage src={heroImg} style={{transform: `translateY(${props.transform}px)`}} />
                <Title initialPose="exit" pose="enter">
                    <Fade top cascade>
                        Good Meal
                    </Fade>
                </Title>
                <Subtitle initialPose="exit" pose="enter">
                    <Fade top cascade>
                        FEEL LIKE AT HOME
                    </Fade>
                </Subtitle>
            </Header>
            <InfoSection 
                {...props}
                />
            <Specialities transform={props.transform}/>
            <Menu />
        </React.Fragment>
    );
};