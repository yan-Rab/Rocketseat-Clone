import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;

padding: 13.4rem 4vw 5vh;

@media(max-width: 681px){
    padding: 12.4rem 4vw 5vh;  
}

`

export const Wrapper = styled.div`
display: flex;
height: 100%;
flex-direction: column;
width: min(100%, max(1100px));
`

export const WelcomeSection = styled.section`
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 681px){
    flex-direction: column;
    align-items: center;
}
`

export const Flex = styled.div`
display: flex;
align-items: center;

@media(max-width: 681px){
    flex-direction: column;
    margin-bottom: 20px;
}
`

export const Box = styled.span`
display: flex;
flex-direction: column;

@media(max-width: 681px){
    margin-top: 20px;
    align-items: center;
}
`

export const HelloText = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 3.4rem;
color: var(--title);
`

export const P = styled.p`
font-family: 'Roboto';
color: var(--text);
font-size: 1.6rem;
flex-wrap: wrap;
max-width: 40rem;
line-height: 2.5rem;
margin-left: 4.6rem;

`
