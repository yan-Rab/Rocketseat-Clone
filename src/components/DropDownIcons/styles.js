import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
background: var(--gray-dark);
position:absolute;
top: 82px;
border-radius: 6px;
width: 400px;
right:${props => props.rightMargin ? props.rightMargin : 'calc(6vw + 90px)'};
animation: fadein 0.4s;

@keyframes fadein{
 0%{
     opacity: 0
 }  

 100%{
    opacity: 1
 }
}

@media(max-width: 771px){
    right: 0;
    width: 100%;
    top: 72px;
    border-radius: 0 6px;
}
`
export const Header = styled.header`
width: 100%;
border-top-left-radius: 6px;
border-top-right-radius:6px;
align-items: center;
padding: 15px 20px;
background: #29292E;

@media(max-width: 771px){
    right: 0;
    width: 100%;
    top: 72px;
    border-radius: 0;
}
`
export const Title = styled.h1`
color: var(--title);
font-weight: 500;
font-size: 1.6rem;
font-family: 'Roboto', sans-serif;
`
export const Content = styled.section`
padding: 25px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const IconAmazed = styled.img`
width: 100px;
height: 60px;
`
export const Message = styled.p`
color: var(--text);
margin-top: 15px;
font-size: 1.4rem;
font-weight: 400;
font-family: 'Roboto', sans-serif;
`