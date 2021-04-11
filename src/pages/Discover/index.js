import TrailCard from '../../components/TrailCard'

import {
    Container,
    Wrapper,
    Community,
    Box,
    Text,
    ButtonLinkCommunity,
    Title,
    Trails,
    RocketIcon,
    Rocket2Icon,
    LocationPinIcon,
    UserAstronautIcon
} from './styles'

export default function Discover(){
    return(
        <Container>
            <Wrapper>
                <Community>
                    <Box> 
                        <Text>Discover</Text>
                    </Box>
                    
                    <ButtonLinkCommunity>
                        COMUNIDADE
                    </ButtonLinkCommunity>
                </Community>

                <Title>Trilhas disponíveis</Title>

                <Trails>
                    <TrailCard 
                    colorSecondary = '#E83F5B'
                    title = 'Equipando sua nave'
                    description = 'Configure seu ambiente de desenvolvimento de forma produtiva utilizando seu terminal, um bom editor de códigos e outras ferramentas.'
                    >
                        <RocketIcon />
                    </TrailCard>

                    <TrailCard 
                    colorSecondary = 'var(--purple)'
                    title = 'Guias estelares'
                    description = 'A trilha perfeita para quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.'
                    >
                        <LocationPinIcon />
                    </TrailCard>

                    <TrailCard 
                    colorSecondary = '#04D361'
                    title = 'Preparação de astronautas'
                    description = 'Hora de levar suas habilidades como astronauta para o próximo nível dominando a web e as técnicas por trás de aplicações modernas'
                    >
                        <UserAstronautIcon />
                    </TrailCard>

                    <TrailCard 
                    colorSecondary = '#FD951F'
                    title = 'Viajando ao espaço'
                    description = 'Tudo que precisa saber para viajar ao espaço com conceitos de back-end, front-end, banco de dados, trabalho em time e mais.'
                    >
                        <Rocket2Icon />
                    </TrailCard>
                </Trails>

                <Title>Maratona discover</Title>
            </Wrapper>
        </Container>
    )
}