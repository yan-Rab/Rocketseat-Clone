import React from 'react'


import {
Container,
GroupLink,
Title,
ProfileIcon,
DataIcon,
HelpIcon,
ChangelogIcon,
HistoryIcon,
BackIcon,
ButtonFeedBack
} from './styles'

export default function DropDown(){
   

    return(
        <Container>
            <GroupLink>
                <ProfileIcon />
                <Title>Meu perfil</Title>
            </GroupLink>

            <GroupLink>
                <DataIcon />
                <Title>Meus dados</Title>
            </GroupLink>

            <GroupLink>
                <HelpIcon />
                <Title>Central de ajuda</Title>
            </GroupLink>

            <GroupLink>
                <ChangelogIcon />
                <Title>Changelog</Title>
            </GroupLink>

            <GroupLink>
                <HistoryIcon />
                <Title>Histórico</Title>
            </GroupLink>

            <GroupLink>
                <BackIcon />
                <Title>Sair da plataforma</Title>
            </GroupLink>

            <GroupLink>
                <ButtonFeedBack>
                    Dar FeedBack
                </ButtonFeedBack>
            </GroupLink>
            
        </Container>
    )
}