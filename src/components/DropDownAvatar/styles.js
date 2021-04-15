import styled, {css} from 'styled-components'
import {
    User,
    Cycle,
    Database,
    CloseCircle,
    LiveHelp,
    History
} from '../Icons'


export const Container = styled.div`
background: var(--gray-dark);
margin-right: 20px;
margin-top: 26px;
z-index: 2;
position: fixed;
display: flex;
flex-direction: column;
border-radius: 6px;
width: 270px;

box-shadow: 0 0 60px var(--background);
animation: fadein 0.4s;

@keyframes fadein{
 0%{
     opacity: 0
 }  

 100%{
    opacity: 1
 }
}

@media(max-width: 520px){
    width: 100%;
    margin-right: 0;
    top: 60px;
    margin-top: 0;
    border-radius: 0;
}
`
export const GroupLink = styled.span`
display: flex;
padding: 15px 24px;
align-items: center;
transition-duration: 0.3s;

&:hover{
    background: #1c1c1c;
}

&:last-child:hover{
   background: none;
}

`
export const Title = styled.h1`
color: #e1e1e6;
font-weight: 500;
font-size: 1.6rem;
margin-left: 20px;
font-family: 'Roboto', sans-serif;
`

const iconCSS = css`
fill: var(--purple);
color: var(--purple);
width: 22px;
height: 22px;
`

export const ProfileIcon = styled(User)`${iconCSS}`
export const DataIcon = styled(Database)`${iconCSS}`
export const HelpIcon = styled(LiveHelp)`${iconCSS}`
export const ChangelogIcon = styled(Cycle)`${iconCSS}`
export const HistoryIcon = styled(History)`${iconCSS}`
export const BackIcon = styled(CloseCircle)`${iconCSS}`


export const ButtonFeedBack = styled.button`
display: flex;
align-items: center;
justify-content: center;
background: var(--purple);
width: 100%;
height: 40px;
font-family: 'Roboto', sans-serif;
color: var(--title);
border: none;
outline: none;
border-radius: 4px;
font-size: 1.6rem;
transition: filter 0.3s;

&:hover{
    filter: brightness(110%);
}
`