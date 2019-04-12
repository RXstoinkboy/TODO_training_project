import styled from 'styled-components';

export const Wrapper = styled.div`
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
    align-items: center;
    margin: 1rem;
    background: var(--mainGrad);
    padding: 1rem;
    border-radius: 3px;

    @media all and (max-width: 800px){
        grid-template-columns: 1fr 2fr;
    }

    @media all and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/-1;
    overflow: hidden;
    max-width: 300px;
    max-height: 400px;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
        grid-row: 2/3;
        height: 200px;
        max-width: 200px;
    }
`

export const Title = styled.h3`
    font-size: 2rem;
    font-family: 'Kaushan Script';
    grid-column: 2/3;
    text-align: center;
    padding-bottom: 2rem;
    grid-row: 1/2;
    align-self: start;
    text-transform: capitalize;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
        grid-row: 1/2;
    }
`

export const Image = styled.img`
    object-fit: cover;
`

export const Source = styled.div`
    display: flex;
    justify-self: start;
    flex-flow: column nowrap;
    padding-left: 1rem;
    justify-content: flex-start;
    grid-column: 2/3;
    grid-row: 2/3;
    margin-bottom: 1rem;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
        grid-row: 4/5;
    }
`

export const RecipeID = styled.p`
    font-family: "Lato";
    font-size: 1rem;
    margin: .3rem 0;
`

export const F2FURL = styled.a`
    color: var(--mainSecondary);
    font-size: 1rem;
    font-family: 'Lato';
    margin: .3rem;

    &:hover{
        color: tomato;
    }
`

export const Publisher = styled(Source)`
    font-family: 'Lato';
    grid-column: 2/3;
    grid-row: 3/4;

    @media all and (max-width: 500px){
        grid-column: 1/-1;
        grid-row: 5/6;
    }
`

export const PublisherUrl = styled(F2FURL)`

`

export const PublisherSourceUrl = styled(F2FURL)`

`