import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-column: 1/2;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    color: var(--mainColor);

    @media all and (max-width: 850px){
        text-align: left;
        align-items: center;
        margin: 10px;
        grid-column: 1/-1;
        border-bottom: 1px solid var(--mainColor);
    }
`
export const Title = styled.h1`
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    color: var(--mainColor);
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 100;

    @media all and (max-width: 850px){
        margin: 1rem 0 .5rem 0;
    }
`
export const HoursWrapper = styled.div`
    margin: .5rem 0;
`
export const Hours = styled.div`
    display: flex;
    flex-flow: column nowrap; 
    margin: .5rem 0;
    font-weight: 100;
`

export const Label = styled.h3`
    font-weight: 400;
`
export const Time = styled.p`

`

export const Address = styled.div`
font-size: 1.5rem;
margin-top: 4rem;

@media all and (max-width: 850px){
        margin: 1rem 0 2rem 0;
    }
`