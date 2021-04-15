import styled, {css} from 'styled-components'

import {
    Rocket,
    Rocket2,
    UserAstronaut,
    LocationPin,
    Run
} from '../../components/Icons'


export const Container = styled.div`
display: flex;
min-height: 100%;
width: 100%;
position: relative;
padding: 9.4rem 4vw 5vh;
justify-content: center;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 1300px;
`

export const Community = styled.section`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid var(--gray-dark);
padding: 20px 0;

@media(max-width: 600px){
    flex-direction: column;
    align-items: center;
}
`
export const Box = styled.div`
display: flex;
align-items: center;
`

export const LogoDiscover = styled.img`
width: 60px;
height: 60px;
`
export const Text = styled.div`
margin-left: 15px;
font-family: 'Roboto' , -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
font-size: 3.5rem;
color: var(--title);
`
export const ButtonLinkCommunity = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: var(--purple);
border-radius: 4px;
color: var(--title);
font-family: 'Roboto', sans-serif;
font-size: 1.4rem;
height: calc(5vh + 2vw);
width: 153px;
font-weight: 500;
transition: filter 0.3s;
&:hover{
    filter: brightness(120%);
}

@media(max-width: 600px){
    margin-top:40px;
}
`

export const Title = styled.h1`
font-family: 'Roboto', sans-serif;
color: var(--title);
font-size: 3rem;
margin-top: 50px;
`

export const Trails = styled.section`
display: grid;
width: 100%;
grid-template-columns: repeat(4, 1fr);
padding: 20px 0;
border-bottom: 1px solid var(--gray-dark);
gap: 32px;


@media(max-width: 1300px){
    grid-template-columns: repeat(2, 1fr);
}

@media(max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
}
`

export const iconCSS = css`
width: 100%;
height: 100%;
fill: white;
color: white;
`

export const RocketIcon = styled(Rocket)`${iconCSS}`
export const Rocket2Icon = styled(Rocket2)`${iconCSS}`
export const LocationPinIcon = styled(LocationPin)`${iconCSS}`
export const UserAstronautIcon = styled(UserAstronaut)`${iconCSS}`

export const Marathons = styled.section`
display: grid;
gap: 32px;
margin-top: 10px;
width: 100%;
grid-template-columns: repeat(2, 1fr);
padding: 20px 0;
border-bottom: 1px solid var(--gray-dark);


@media(max-width: 768px){
grid-template-columns: repeat(1, 1fr);
}
`

export const RunIcon = styled(Run)`${iconCSS}`

