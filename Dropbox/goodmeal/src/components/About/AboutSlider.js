import {Wrapper, Section, Photo, ContentWrapper, Title, Content, ScrollDown, ScrollDownWrapper} from './About.style.js'
import Fade from 'react-reveal';
import React from 'react';

const About = props => {
    return (
        <Wrapper>
            <Section>
                <Photo 
                    src={props.currentSlide.picture}
                    alt={props.currentSlide.alt} />
                <ContentWrapper>
                    <Title>
                        <Fade>
                            {props.currentSlide.title}
                        </Fade>
                    </Title>
                    <Fade>
                        <Content>{props.currentSlide.content}</Content>
                    </Fade>
                </ContentWrapper>
                <ScrollDownWrapper
                    onClick={props.handleSlider}>
                    <ScrollDown />
                </ScrollDownWrapper>
            </Section>
        </Wrapper>
    );
};

export default About;