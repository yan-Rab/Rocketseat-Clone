
import React, {useContext, useState} from 'react'
import logo from '../../assets/images/logo-rocket.png'
import {DropDownContext} from '../../Contexts/DropDownContext'
import {
    Container,
    Wrapper,
    Logo,
    NavBar,
    Link,
    NavIcons,
    ButtonIcon,
    SearchIcon,
    PersonIcon,
    BellIcon,
    Avatar,
    Image,
    BoxSearch,
    InputSearch
} from './styles'

const linkStyles = {
    borderBottomColor: 'var(--purple)', 
    borderBottomWidth: 2, 
    borderBottomStyle: 'solid',
    color: 'var(--title)'
}

export default function Header(){

    const [isVisibleInput, setIsVisibleInput] = useState(false)

    const {
        changeVisibleDropDownAvatar,
        changeVisibleDropDownNotifications,
        changeVisibleDropDownInvites
    } = useContext(DropDownContext)

    console.log(isVisibleInput)

    return(
        <Container>
            <Wrapper>
            <Logo src = {logo}/>

            {!isVisibleInput && (
                <NavBar>
                    <Link exact to = '/' activeStyle = {linkStyles}>Home</Link>
                    <Link to = '/Profile' activeStyle = {linkStyles}>Perfil</Link>
                    <Link to = '/Discover' activeStyle = {linkStyles}>Discover</Link>
                </NavBar>
            )}
            

            <NavIcons>

                {isVisibleInput ? (
                   
                    <BoxSearch>
                        <SearchIcon onClick = {() => setIsVisibleInput(!isVisibleInput)}/>
                        <InputSearch 
                        placeholder = 'Busque uma pessoa' 
                        autoFocus
                        onBlur = {() => setIsVisibleInput(false) }/>
                    </BoxSearch>
                   
                ) : (
                    <ButtonIcon onClick = {() => setIsVisibleInput(!isVisibleInput)}>
                        <SearchIcon  />
                    </ButtonIcon>
                )}
               

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
            </Wrapper>
        </Container>
    )
}