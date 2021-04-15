import styled from 'styled-components'
import {Search} from '../Icons'

export const Container = styled.div`
display: none;
position: absolute;
left: 0;
right: 0;
align-items: center;
padding: 5px 10px;
height: 52px;
top: 0;
background: #141316;
border: 2px #2a2a2a solid;

@media(max-width: 760px){
display: flex;
}

`
export const SearchIcon = styled(Search)`
width: 22px;
height: 22px;
margin: 0 14px;
fill: var(--text);
`

export const Input = styled.input`
width: 100%;
height: 100%;
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