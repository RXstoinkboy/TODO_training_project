import styled from 'styled-components'
import newsBG from '../../img/newsBG.jpg'

export const Wrapper = styled.div`
    background: url(${newsBG});
    background-size: 100vw auto;
    background-repeat: no-repeat;
    background-position: 0 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;

    &::after{
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(black 75%, hsla(0, 100%, 100%, 0) 100%);
        position: absolute;
        top: 0;
        left: 0;
    }

    @media all and (max-width: 850px){
        &::after{
        background: linear-gradient(black 95%, hsla(0, 100%, 100%, 0) 100%);
    }
    }
`

export const NewsList = styled.ul`
    color: var(--mainColor);
    position: relative;
    z-index:3;
    list-style: none;
    margin: 10vh auto 30vh auto;
    width: 1000px;

    @media all and (max-width: 1100px){
        width: 800px;
    }
    @media all and (max-width: 850px){
        width: 100%;
        margin: 10vh 20px 30vh 20px;
    }
`

export const NewsItem = styled.li`
    display: grid;
    grid-gap: 10px;
    margin: 30px 0;
    font-size: 1rem;
    font-family: 'Lato';
    align-items: center;
    text-align:justify;
    line-height: 1.5rem;

    &:nth-child(even){
        grid-template-columns: 1fr 300px;
    }
    &:nth-child(odd){
        grid-template-columns: 300px 1fr;
    }

    @media all and (max-width: 850px){
        border-bottom: 1px solid var(--mainColor);
        grid-gap: 0;
        &:nth-child(even){
        grid-template-columns: 1fr;
        }
        &:nth-child(odd){
            grid-template-columns: 1fr;
        }
    }
`

export const NewsItemPicture = styled.div`
    background: url(${props => props.photo});
    background-size: cover;
    height: 300px;
    position: relative;

    &::after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(135deg, hsla(70deg, 0%, 100%, .7), hsla(50deg, 80%, 30%, .5));
    }

    @media all and (max-width: 850px){
        width: 100%;
        height: 100px;
    }
`

export const NewsItemContent = styled.div`
    background: var(--mainGrad);
    height: 100%;
    display: grid;
    align-items:center;
    padding: 10px;
`