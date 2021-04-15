import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'

import {
    Search,
    Bell,
    PersonAdd,
    Menu
} from '../Icons'

export const Container = styled.header`
display: flex;
width: 100%;
justify-content:center;
position: fixed;
z-index: 2;
background: var(--gray-dark);
height: 72px;
padding: 0px 20px;

transition: height 0.4s;

@media(max-width: 769px){
    height: 60px;
    padding: 0 10px;
}
`
export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-Between;
align-items: center;
max-width: 1300px;
`

export const Flex = styled.div`
display: flex;
align-items: center;
`

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;

@media(min-width: 467px){
    position: relative
}
`
export const BoxLogo = styled.div`
display: flex;

@media(max-width: 467px){
display: none;

}
`

export const BoxLogoAlt = styled.span`
display: none;

@media(max-width: 467px){
display: flex;
}
`
export const Logo = styled.img`
transition: height 0.4s;

@media(max-width: 769px){
   margin-left: 15px;
   width: 150px;
   height: 30px;

}
`

export const LogoAlt = styled.img`
width: 65px;
height: 65px;
`

export const MenuIcon = styled(Menu)`
display: none;
width: 35px;
margin-left: 30px;
height: 35px;
fill: #737380;
color: #737380;


@media(max-width: 467px){
margin-left: 5px;
}

@media(max-width: 1039px){
display: flex;
}
`

export const NavBar = styled.nav`
display: flex;
align-items: center;
height: 100%;

@media(max-width: 1046px){
    display: none;
}
`

export const Link = styled(NavLink)`
display: flex;
align-items: center;
text-decoration: none;
color: var(--text);
font-weight: 400;
font-size: 1.6rem;
height: 100%;
padding: 0 0.8rem;
font-family: 'Roboto';
margin: 0 10px;
transition-duration: 0.3s;
&:hover{
    color: var(--title);
}

`

export const NavIcons = styled.nav`
display: flex;
align-items: center;
height: 100%;

`

export const BoxSearch = styled.div`
display: flex;
border: 2px #2a2a2a solid;
border-radius: 4px;
margin-right: 10px;
align-items: center;
background: var(--background);
padding: 6px 4px;
height: 46px;
min-width: 290px;

@media(max-width: 760px){
    display: none;
}
`
export const Input = styled.input`
height: 100%;
width: 100%;
background: none;
border: none;
outline: none;
font-family: 'Roboto', sans-serif;
color: var(--title);
font-size: 1.6rem;

&::placeholder{
    color: var(--text);
    font-family: 'Roboto', sans-serif;
}
`

export const ButtonIcon = styled.button`
display: flex;
justify-content: center;
align-items: center;
outline: none;
padding: 12px 1px;
border: none;
background: none;
border-radius: 4px;
&:hover{
    background: var(--background);
    > svg{
        fill: var(--title);
    }
}
`

const iconCSS = css`
width: 21px;
height: 21px;

margin: 0 14px;
fill: var(--text);

@media(max-width: 769px){
   margin: 0 10px;
}
`

export const SearchIcon = styled(Search)`
${iconCSS}

`

export const PersonIcon = styled(PersonAdd)`
${iconCSS}
`

export const BellIcon = styled(Bell)`
${iconCSS}
`

export const Avatar = styled.button`
width: 52px;
height: 52px;
border: 0;
outline: none;
display: flex;

border: 2px var(--title) solid;
margin: 0 15px;
border-radius: 50%;
background-color: gray;

@media(max-width: 769px){
    height: 42px;
    width: 42px;
}
`

export const Image = styled.img`
width: 100%;
border-radius: 50%;
height: 100%;
border: 2px var(--background) solid;
`






