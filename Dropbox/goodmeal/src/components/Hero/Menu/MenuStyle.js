import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width: 100%;
    background: white;
    padding: 4rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 850px){
        padding: 20px;
    }
`
export const MenuGrid = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 1fr 1fr;
    max-width: 70vw;
    margin-bottom: 5rem;

    @media all and (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
        max-width: 100%;
    }

    @media all and (max-width: 850px){
        grid-template-columns: 1fr;
        max-width: 100%;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Kaushan Script', cursive;
    position: relative;
    margin-bottom: 2rem;
    
    &::after{
        content: '';
        position: absolute;
        width: 50%;
        height: 3px;
        top: 120%;
        left: 25%;
        background: var(--mainColor);
    }
`
export const Section = styled.h2`
    margin: 3rem 0;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    color: var(--tertiaryColor);
    text-transform: uppercase;
    letter-spacing: .5rem;
    text-align: center;
`
export const DishContainer = styled.div`
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: 4fr 1fr;
    font-family: 'Lato', sans-serif;
`

export const Dish = styled.h3`
    grid-column: 1/2;
    text-transform: uppercase;

`
export const Description = styled.p`
    grid-column: 1/2;
    text-align: justify;
    color: var(--tertiaryColor);
`
export const Price = styled.span`
    grid-column: 2/-1;
    grid-row: 1/3;
    align-self: center;
    justify-self: center;
    color: var(--mainColor);
    font-size: 2rem;
    font-family: 'Kaushan Script', cursive;
`
