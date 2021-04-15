
import {
Container,

Link
} from './styles'
import {linkStylesDropDown} from '../../GlobalStyles'

export default function DropDownNavigation(){
    return(
        <Container>
            
                <Link exact to = '/' activeStyle = {linkStylesDropDown}>Home</Link>
                <Link to = '/Profile' activeStyle = {linkStylesDropDown}>Profile</Link>
                <Link to = '/Discover' activeStyle = {linkStylesDropDown}>Discover</Link>
           
        </Container>
    )
}