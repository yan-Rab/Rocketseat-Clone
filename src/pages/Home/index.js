import ProfileCard from '../../components/ProfileCard'

import {
Container,
Wrapper,
Flex,
Box,
WelcomeSection,
HelloText,
P
} from './styles'
export default function Home(){
    return(
        <Container>
            <Wrapper> 
                <WelcomeSection>
                    <Flex>
                        <HelloText>
                            Olá, Yan
                        </HelloText>
                    
                        <Box>
                        <P>Seja bem vindo de volta.</P>
                        <P>Que tal continuar assistindo sua aula de onde parou?</P>
                        </Box>

                    </Flex>

                    <P>#NeverStopLearning</P>
                        
                </WelcomeSection>
                
                <ProfileCard />
            </Wrapper>
        </Container>
    )
}