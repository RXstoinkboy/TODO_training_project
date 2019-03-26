import styled from 'styled-components';

export const BlackShade = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: hsla(0, 0%, 0%, .9);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    width: 400px;
    height: 400px;
    background: var(--mainGrad);
    border-radius: 3px;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`