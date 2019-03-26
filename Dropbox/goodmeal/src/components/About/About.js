import React, { Component } from 'react';
import aboutUs from '../../aboutUs.js';
import Slider from './AboutSlider.js';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            slides: aboutUs,
            iteration: 0,
            currentSlide: {},
        }
    }
    handleSlider =()=>{
        this.setState({
            iteration: this.state.iteration < 2 ? this.state.iteration + 1 : 0,
        }, ()=>{
            this.setState({
                currentSlide: this.state.slides[this.state.iteration]
            })
        })
        console.log(this.state.currentSlide)
    }
    componentDidMount(){
        this.setState({
            currentSlide: this.state.slides[0]
        })
    }
    render() {
        return (
            <Slider 
            {...this.state} 
            handleSlider={this.handleSlider} />
        );
    }
}

export default About;