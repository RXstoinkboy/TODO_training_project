import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: black;
    transform: rotate(0deg);
    color: white;
    font-size:3rem;
    font-family: 'Lato';
`

const bounce = keyframes`
    0%, 100%{
        transform: translateY(15px)
    }
    50%{
        transform: translateY(-5px)
    }
`

export const Dot = styled.div`
    width:10px;
    height:10px;
    background: white;
    border-radius: 50%;
    margin-left: .7rem;
    animation: ${bounce} .5s ease infinite;
    animation-delay: ${props => props.delay};
`