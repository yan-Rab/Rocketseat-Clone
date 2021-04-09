import React, {useContext} from 'react'
import logo from '../../assets/images/logo-rocket.png'
import {DropDownContext} from '../../Contexts/DropDownContext'
import {
    Container,
    Logo,
    NavBar,
    Link,
    NavIcons,
    ButtonIcon,
    SearchIcon,
    PersonIcon,
    BellIcon,
    Avatar,
    Image
} from './styles'

const linkStyles = {
    borderBottomColor: 'var(--purple)', 
    borderBottomWidth: 2, 
    borderBottomStyle: 'solid',
    color: 'var(--title)'
}

export default function Header(){

    const {
        changeVisibleDropDownAvatar,
        changeVisibleDropDownNotifications,
        changeVisibleDropDownInvites
    } = useContext(DropDownContext)

    return(
        <Container>
            <Logo src = {logo}/>
            <NavBar>
                <Link exact to = '/' activeStyle = {linkStyles}>Home</Link>
                <Link to = '/Profile' activeStyle = {linkStyles}>Perfil</Link>
                <Link to = '/Discover' activeStyle = {linkStyles}>Discover</Link>
            </NavBar>

            <NavIcons>
                <ButtonIcon >
                    <SearchIcon  />
                </ButtonIcon>

                <ButtonIcon onClick = {changeVisibleDropDownInvites}>
                    <PersonIcon />
                </ButtonIcon>

                <ButtonIcon onClick = {changeVisibleDropDownNotifications}>
                    <BellIcon />
                </ButtonIcon>
                
                <Avatar onClick = {changeVisibleDropDownAvatar}>
                    <Image src = 'https://avatars.githubusercontent.com/u/63311216?v=4' />
                </Avatar>
            </NavIcons>

        </Container>
    )
}