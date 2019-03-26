import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    padding-top: 10vh;
    bottom: 0;
    position: absolute;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    align-items: center;
    background: linear-gradient(45deg, hsl(0deg, 0%,90%), hsl(0deg, 0%,100%));

    @media all and (max-width: 850px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        justify-items: center;
    }
`
