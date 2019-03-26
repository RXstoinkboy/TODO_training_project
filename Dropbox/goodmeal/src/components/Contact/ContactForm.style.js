import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-column: 2/-1;
    grid-row: 1/-2;
    font-family: "Lato";
    text-transform: uppercase;
    color: var(--mainColor);

    @media all and (max-width: 850px){
        grid-column: 1/-1;
        grid-row: 2/3;
        margin: 10px;
    }
`
export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 100;    
    margin-bottom: 1rem;

    @media all and (max-width: 850px){
        text-align: center;
    }
`
export const Form = styled.form`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    color: var(--mainColor);

    @media all and (max-width: 850px){
        grid-template-columns: 1fr;
        width: 100%;
    }
`
export const Name = styled.input`
    grid-column: 1/-1;
    ${props => props.nameVal ? null : 'box-shadow: 0px 0px 5px brown'};
    padding: .5rem;
    font-size: 1.2rem;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    background: transparent;

    &::placeholder{
        color: hsla(0, 0%, 80%, 1);
    }

    &:focus{
        outline:none;
    }
`
export const Email = styled.input`
    grid-column: 1/2;
    ${props => props.emailVal ? null : 'box-shadow: 0px 0px 5px brown'};
    padding: .5rem;
    font-size: 1.2rem;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    background: transparent;

    &::placeholder{
        color: hsla(0, 0%, 80%, 1);
    }

    &:focus{
        outline:none;
    }

    @media all and (max-width: 850px){
        grid-column: 1/-1;
    }
`
export const Phone = styled.input`
    grid-column: 2/-1;
    ${props => props.phoneVal ? null : 'box-shadow: 0px 0px 5px brown'};
    padding: .5rem;
    font-size: 1.2rem;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    background: transparent;

    &::placeholder{
        color: hsla(0, 0%, 80%, 1);
    }

    &:focus{
        outline:none;
    }
    @media all and (max-width: 850px){
        grid-column: 1/-1;
    }
`
export const Message = styled.input`
    grid-column: 1/-1;
    ${props => props.messageVal ? null : 'box-shadow: 0px 0px 5px brown'};
    padding: .5rem;
    font-size: 1.2rem;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    background: transparent;

    &::placeholder{
        color: hsla(0, 0%, 80%, 1);
    }

    &:focus{
        outline:none;
    }
    @media all and (max-width: 850px){
        grid-column: 1/-1;
    }
`

export const Button = styled.button`
    grid-column: 1/-1;
    padding: 0.5rem;
    min-height: 40px;
    color: var(--mainColor);
    position: relative;
    
    font-size: 1.2rem;
    ${props => props.disabled 
        ? 'background: none' 
        : 'background: var(--mainColor)'};
    ${props => props.disabled 
        ? 'color: var(--mainColor)' 
        : 'color: white'};
    ${props => props.disabled 
        ? 'filter: grayscale(1) opacity(.5)' 
        : 'filter: grayscale(0) opacity(1)'};
    border: 1px solid var(--mainColor);
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        ${props => props.disabled 
            ? null 
            : 'filter: brightness(110%)'};
        ${props => props.disabled 
            ? null 
            : 'box-shadow: 0px 3px 20px grey'};
    }

    &:focus{
        outline: none;
    }
`

export const Permission = styled.div`
    grid-column: 1/-1;
    font-size: .7rem;
    text-align: justify;
`