import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex:1;
padding: 30px;
height: 400px;
flex-direction: column;
border-radius: 6px 6px 0 0;
background: var(--gray-dark);
margin: 20px 0;
border-bottom: 2px ${props => props.colorSecondary} solid;
transition: filter 0.3s;
&:hover{
    filter: brightness(130%);
}

`
export const Avatar = styled.div`
width: 80px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
background: ${props => props.colorSecondary};
border-radius: 4px;
`
export const Title = styled.h1`
margin-top: 30px;
font-weight: 500;

font-family: 'Roboto', sans-serif;
color: #e1e1e6;
font-size: 2.5rem;
`

export const Description = styled.div`
margin-top: 20px;
line-height: 2.4rem;
font-family: 'Roboto', sans-serif;
color: var(--text);
font-size: 1.4rem;
`