import {
    Container,
    Avatar,
    Title,
    Description
} from './styles'

export default function TrailCard({children,title, description, colorSecondary}){
    return(
        <Container colorSecondary = {colorSecondary}>
            <Avatar colorSecondary = {colorSecondary}>
                {children}
            </Avatar>

            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}