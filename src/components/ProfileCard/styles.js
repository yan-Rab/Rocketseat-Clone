import styled from 'styled-components'
import {Fire, Check} from '../Icons'
import {Link} from 'react-router-dom'

export const Container = styled.section`
display: flex;
flex-direction: column;
margin-top: 4.5rem;

width: 100%;
max-width: 600px;
padding: 3rem 0;
background: var(--gray-dark);
border-radius: 4px;

@media(max-width: 940px){
    max-width: 100%;
}
`

export const Flex = styled.div`
display: flex;
width: 100%;
align-items: center;

padding: 0 2rem;

@media(max-width: 681px){
    flex-direction: column;
}
`
export const Avatar = styled.span`
width: 12.6rem;
height: 12.6rem;
border: 2px var(--title) solid;
border-radius: 50%;
background: gray;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
border: 2px var(--background) solid;
border-radius: 50%;
`

export const Box = styled.div`
display: flex;
flex-direction: column;
margin: 0 2.5rem;

@media(max-width: 681px){
    align-items: center;
    margin-top: 20px;
}
`

export const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 2.5rem;
color: var(--title);
`

export const ViewsText = styled.p`
margin-top: 10px;
color: var(--text);
font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
`

export const ButtonLinkProfile = styled(Link)`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
color: var(--title);
font-family: 'Roboto', sans-serif;
padding: 12px 24px;
width: 200px;
height: 4.5rem;

font-size: 1.6rem;
text-decoration: none;

border-radius: 6px;
background: var(--purple);

transition: filter 0.3s;
&:hover{
    filter: brightness(110%);
}
`


export const BoxNivelProfile = styled.section`
display: flex;
flex-direction: column;
margin-top: 25px;
padding: 3rem;
border-top: 1.5px var(--background) solid;

`

export const Text = styled.span`
display: flex;
color: var(--title);
font-size: 1.6rem;
font-family: 'Roboto', sans-serif;
`

export const NivelText = styled.h1`
color: var(--title);
margin-left: 5px;
font-size: 1.6rem;
font-weight: 550;
font-family: 'Roboto';
`

export const NivelBar = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
position: relative;
width: 100%;
height: 6px;
background: #535353;

`

export const CurrentNivelBar = styled.div`
display: flex;
align-items: center;
position: relative;
width: 50%;
height: 100%;
background-color: var(--green);
`

export const BoxIcon = styled.div`
width: 24px;
height: 24px;
padding: 2px;
right: 0;
position:absolute;

border-radius: 50%;

justify-content: center;
align-items: center;
`

export const BoxIconCheck = styled(BoxIcon)`
background: var(--background);
border: 3px var(--green) solid;
`


export const BoxIconFire = styled(BoxIcon)`
background: #535353;
`
export const FireIcon = styled(Fire)`
width: 100%;
height: 100%;
fill: var(--title);
`

export const CheckIcon = styled(Check)`
width: 100%;
height: 100%;
fill: var(--title);
`