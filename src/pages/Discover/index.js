import CardsDiscover from '../../components/CardsDiscover'
import logoDiscover from '../../assets/images/logo-discover.svg'
import {
    Container,
    Wrapper,
    Community,
    Box,
    LogoDiscover,
    Text,
    ButtonLinkCommunity,
    Title,
    Trails,
    RocketIcon,
    Rocket2Icon,
    LocationPinIcon,
    UserAstronautIcon,
    Marathons,
    RunIcon
} from './styles'


export default function Discover(){
    return(
        <Container>
            <Wrapper>
                
                <Community>
                    <Box> 
                        <LogoDiscover src = {logoDiscover} />
                        <Text>Discover</Text>
                    </Box>
                    
                    <ButtonLinkCommunity>
                        COMUNIDADE
                    </ButtonLinkCommunity>
                </Community>

                <Title>Trilhas disponíveis</Title>

                <Trails>
                    <CardsDiscover 
                    colorSecondary = '#E83F5B'
                    title = 'Equipando sua nave'
                    description = 'Configure seu ambiente de desenvolvimento de forma produtiva utilizando seu terminal, um bom editor de códigos e outras ferramentas.'
                    >
                        <RocketIcon />
                    </CardsDiscover>

                    <CardsDiscover 
                    colorSecondary = 'var(--purple)'
                    title = 'Guias estelares'
                    description = 'A trilha perfeita para quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.'
                    >
                        <LocationPinIcon />
                    </CardsDiscover>

                    <CardsDiscover 
                    colorSecondary = '#04D361'
                    title = 'Preparação de astronautas'
                    description = 'Hora de levar suas habilidades como astronauta para o próximo nível dominando a web e as técnicas por trás de aplicações modernas'
                    >
                        <UserAstronautIcon />
                    </CardsDiscover>

                    <CardsDiscover 
                    colorSecondary = '#FD951F'
                    title = 'Viajando ao espaço'
                    description = 'Tudo que precisa saber para viajar ao espaço com conceitos de back-end, front-end, banco de dados, trabalho em time e mais.'
                    >
                        <Rocket2Icon />
                    </CardsDiscover>
                </Trails>

                <Title>Maratona discover</Title>

                <Marathons>
                    <CardsDiscover 
                    title = 'Edição 01: dev.finance$'
                    colorSecondary = 'var(--purple)'
                    description = 'Vamos construir um mini sistema financeiro com HTML, CSS e JS e colocaremos nosso código no github. Maratona prática com a mão no código para consolidar os conceitos aprendidos nas trilhas e cursos do discover'
                    >
                        <RunIcon />
                    </CardsDiscover>

                    <CardsDiscover 
                    title = 'Edição 02: JobsCalc' 
                    colorSecondary = 'var(--purple)'
                    description = 'Vamos construir o app de uma calculadora para trabalhos freelance, com servidor NodeJS, EJS para template engine e SQLite como banco de dados. Maratona prática com a mão no código para consolidar os conceitos aprendidos nas trilhas e cursos do discover'
                    >
                        <RunIcon />
                    </CardsDiscover>
                </Marathons>
            </Wrapper>
        </Container>
    )
}