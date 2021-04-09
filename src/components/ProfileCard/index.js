import React from 'react'
import {
    Container,
    Flex,
    Avatar,
    Image,
    Box,
    Title,
    ViewsText,
    ButtonLinkProfile,
    BoxNivelProfile,
    Text,
    NivelText,
    NivelBar,
    BoxIconFire,
    FireIcon,
    CurrentNivelBar,
    BoxIconCheck,
    CheckIcon
} from './styles'

export default function ProfileCard(){
    return(
        <Container>
            <Flex>
                <Avatar>
                    <Image src = 'https://avatars.githubusercontent.com/u/63311216?v=4' />
                </Avatar>

                <Box>
                    <Title>Meu Perfil</Title>
                    <ViewsText>22 visualizações nos últimos 7 dias</ViewsText>
                    <ButtonLinkProfile to = '/Profile'>Visualizar perfil</ButtonLinkProfile>
                </Box>
            </Flex>

            <BoxNivelProfile>
                <Text>Nível do perfil: <NivelText>Intermediário</NivelText></Text>
                <NivelBar>
                    <CurrentNivelBar>
                            <BoxIconCheck>
                                <CheckIcon />
                            </BoxIconCheck>
                    </CurrentNivelBar>

                    <BoxIconFire>
                        <FireIcon  />
                    </BoxIconFire>
                </NivelBar>
            </BoxNivelProfile>
            
        </Container>
    )
}