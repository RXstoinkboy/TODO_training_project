import styled from 'styled-components';
import {Title} from '../Hero/HeroStyle';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 6rem;
    position: fixed;
    z-index:100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    transition: all .3s ease;
    ${props => props.down && (window.innerWidth > 850) ? 'background: hsla(0, 0%, 0%, .7)' : 'background: transparent'};
`

export const Logo = styled(Title)`
    font-size: 2rem;
    margin-left: 1rem;
    border-bottom: 2px solid white;
    padding: 0 1rem;
    transition: all .3s ease;
    ${props => props.down && (window.innerWidth > 850)? 'transform: scale(.8)' : 'transform: scale(1)'};

    @media all and (max-width: 850px){
        font-size: 1.5rem;   
    }
`
export const MobileMenuWrapper = styled.div`
    display: none;
    background: hsla(0, 0%, 100%, 0.4);
    z-index: 39;
    border-radius: 4px;
    width: 4rem;
    height: 3rem;
    position: fixed;
    top: 15px;
    right: 12px;

    @media all and (max-width: 850px){
        display: block;
    }

`

export const MobileMenu = styled.div`
    display: none;
    width: 3rem;
    height: 2rem;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 40;
    transition: all .5s ease;
    cursor: pointer;
    ${props => props.open ? 'transform: rotate(45deg)' : 'transform: rotate(0)'};

    &::before{
        content: '';
        position: fixed;
        width: 3rem;
        height: 6px;
        position: fixed;
        border-radius: 3px;
        background: black;
        box-shadow: ${props => props.open ? 'none' : '0 15px 0 black'};
    }

    &::after{
        content: '';
        position: fixed;
        width: 3rem;
        height: 6px;
        position: fixed;
        top: 30px;
        border-radius: 3px;
        transition: all .3s ease;
        background: black;
        ${props => props.open ? 'transform: rotate(450deg) translate(-6px, -21px)' : 'transform: rotate(0) translateX(0)'};
    }

    @media all and (max-width: 850px){
        display: block;
    }
`

export const Nav = styled.nav`
    margin-right: 1rem;
    display: flex;
    transform: translateX(0);

    @media all and (max-width: 850px){
        margin: 0;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
        background: white;
        transition: all .3s ease;
        transform: translateX(100%);
    }
    @media all and (max-width: 850px) and (orientation: landscape){
        padding-top: 1.5rem;
    }
`

export const NavItem = styled.div`
    ${props => props.color === 'black' ? 'color: black' : 'color: white'};
    margin-right: 1rem;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    padding: 1rem;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease;
    ${props => props.down && (window.innerWidth > 850)? 'transform: scale(.9)' : 'transform: scale(1)'};

    &:hover{
        ${props => props.color === 'black' ? 'background: hsla(0deg, 0%, 0%, .2)' : 'background: hsla(0deg, 0%, 100%, .2)'};
    }

    @media all and (max-width: 850px){
        font-size: 2rem;
        color: var(--secondaryColor);
        position: relative;

        &::after{
            content: '';
            background: var(--tertiaryColor);
            position: absolute;
            width: 2rem;
            height: 2px;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media all and (max-width: 850px) and (orientation: landscape){
        font-size: 1.5rem;
    padding: .5rem;
    }
`
