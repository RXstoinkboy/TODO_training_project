import styled from 'styled-components';


export const ParallaxImage = styled.img`
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100vw;

    @media all and (orientation: landscape){
        max-width: 120vw;
    }
    @media all and (orientation: portrait){
        width: auto;
        max-height: 140vh;
`

export const Header = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 90vh;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    overflow: hidden;

    @media all and (max-width: 850px){
        height: 100vh;
    }

    &:after{
        content: '';
        position: absolute;
        width: 100vw;
        height: 100%;
        background: linear-gradient(-45deg, hsla(10, 80%, 10%, .5) 0%, hsla(190, 70%, 10%, .5) 100%);
        top: 0;
        left: 0;
    }
`

export const Title = styled.h1`
    margin: 0;
    font-size: 7rem;
    color: white;
    text-shadow: 1px 1px 10px black;
    font-family: 'Kaushan Script', cursive;
    z-index:2;

    @media all and (max-width: 850px){
        font-size: 4rem;   
    }
`

export const Subtitle = styled.h2`
    margin: 0;
    font-size: 3rem;
    color: white;
    text-shadow: 1px 1px 10px black;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    letter-spacing: .7rem;
    z-index:2;

    @media all and (max-width: 850px){
        font-size: 2rem;
        letter-spacing: .1rem;
    }
`