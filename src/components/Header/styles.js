import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'
import {
    Search,
    Bell,
    PersonAdd
} from '../Icons'

export const Container = styled.header`
display: flex;
width: 100%;
justify-content:center;
position: fixed;
background: var(--gray-dark);
height: 72px;
padding: 0 20px;
`
export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-Between;
align-items: center;
max-width: 1300px;
`

export const Logo = styled.img`

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
border: 2px gray solid;
border-radius: 4px;

align-items: center;
background: var(--background);
padding: 6px 4px;
height: 42px;
width: calc(25vw + 40px);
`
export const InputSearch = styled.input`
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
`

export const Image = styled.img`
width: 100%;
border-radius: 50%;
height: 100%;
border: 2px var(--background) solid;
`






