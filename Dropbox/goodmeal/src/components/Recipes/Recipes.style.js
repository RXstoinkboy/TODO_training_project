import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-top: 13vh;
    min-height: 100vh;
    background: linear-gradient(75deg, hsl(15deg, 20%, 8%), hsl(15deg, 20%, 5%))
`

export const SearchBar = styled.input`
    border: 1px solid var(--secondaryColor);
    padding: 1rem 2rem;
    font-size: 1rem;
    background: transparent;
    color: var(--mainColor);

    &:focus{
        outline: none;
    }
`

export const SearchButton = styled.button`
    font-family: 'Lato', sans-serif;
    padding: 0.5rem;
    margin: 1rem;
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