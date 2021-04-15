import styled from 'styled-components'

export const Container = styled.div`
display: flex;
width: 100%;
position:fixed;
z-index: 2;
top: 60px;
justify-content: center;

@media(max-width: 760px){
    top: 60px;
}
`

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
display: flex;
justify-content: flex-end;
`