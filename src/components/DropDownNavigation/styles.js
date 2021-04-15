import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
display: none;
position: absolute;
flex-direction: column;
background: #29292E;
border-radius: 6px;
padding: 25px 15px;
margin-top: 45px;
margin-left: 10px;
box-shadow: 0 0 30px var(--background);
z-index: 2;
width: 180px;

> a + a{
  margin-top: 20px;  
}

animation: slidein 0.3s;

@keyframes slidein{
  from{
    margin-top: 65px;
  
  }

  to {
    margin-top: 45px;
  }
}

@media(max-width: 1039px){
display: flex;
}

@media(max-width: 470px){
 width: 100%;
 right: 0;
 left: 0;
 border-radius: 0;
 margin-left: 0;
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