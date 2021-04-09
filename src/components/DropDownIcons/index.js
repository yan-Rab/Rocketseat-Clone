import React from 'react';
import iconAmazed from '../../assets/images/amazed.svg'
import {
    Container,
    Header,
    Title,
    Content,
    IconAmazed,
    Message
} from './styles'

export default function DropDownIcons({title, rightMargin}){
    return(
        <Container rightMargin = {rightMargin}>
            <Header>
                <Title>{title}</Title>
            </Header>

            <Content>
                <IconAmazed src = {iconAmazed} />
                <Message>Ainda não tem nada por aqui</Message>
            </Content>
        </Container>
    )
}