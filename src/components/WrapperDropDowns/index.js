import {
    Container,
    Wrapper
} from './styles'

export default function WrapperDropDowns({children}){
    return(
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}