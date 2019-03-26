import styled from 'styled-components';
import interiorImg from '../../../img/interior.jpg';
import coolFood from '../../../img/coolFood.jpg';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 30rem;
    background: white;
    justify-content: center;
    align-items: center;
    z-index: 10;

    @media all and (max-width: 850px){
        height: auto;
    }
`

export const WrapperBlock = styled.div`
    z-index:2;
    max-width: 1080px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 4px 50px black;

    @media all and (max-width: 850px){
        grid-template-columns: 2fr 3fr;
        width: 100%;
        z-index:1;
    }
    
    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
        width: 100%;
        z-index:1;
    }
`

export const Block = styled.div`
    background: var(--mainGrad);
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    padding: 0 2rem;
    text-align: center;
`

export const BigBlockImg = styled(Block)`
    background: url(${interiorImg});
    background-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const SmallBlockImg = styled(Block)`
    background: url(${coolFood});
    background-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media all and (max-width: 500px){
        display: none;
    }
`

export const ButtonReservation = styled.button`
    font-family: 'Lato', sans-serif;
    padding: 0.5rem;
    margin: ${props => props.marg ? '0 0.5rem' : '0'};
    min-height: 40px;
    color: var(--mainColor);
    background: none;
    font-size: 1.2rem;
    border: 1px solid var(--mainColor);
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background: var(--mainColor);
        color: white;
        box-shadow: 0px 3px 20px grey;
    }

    &:focus{
        outline: none;
    }
`