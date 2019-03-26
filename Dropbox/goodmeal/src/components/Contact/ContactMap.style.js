import styled from 'styled-components';

export const Wrapper = styled.div`
grid-column: 1/-1;
width: 100%;
height: 100%;
min-height: 40vh;


@media all and (max-width: 850px){
    grid-column: 1/-1;
    width: 100vw;
    height: 50vh;
    min-height:auto;
}
`