
import React, {useContext} from 'react'
import logo from '../../assets/images/logo-rocket.png'
import logoAlt from '../../assets/images/rocket.png'
import {DropDownContext} from '../../Contexts/DropDownContext'
import DropDownNavigation from '../DropDownNavigation'

import {
    Container,
    Wrapper,
    Flex,
    FlexColumn,
    BoxLogo,
    BoxLogoAlt,
    LogoAlt,
    Logo,
    MenuIcon,
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
    Input
} from './styles'

import {linkStyles} from '../../GlobalStyles'

export default function Header(){


    const {
        changeVisibleDropDownAvatar,
        changeVisibleDropDownNotifications,
        changeVisibleDropDownInvites,
        isVisibleDropDownNavigation,
        changeVisibleDropDownNavigation,
        isVisibleSearchInput,
        changeVisibleSearchInput
    } = useContext(DropDownContext)


    return(
        <Container>
            <Wrapper>


            <Flex>
                <BoxLogo>
                    <Logo src = {logo}/>
                    
                </BoxLogo>
                
                <BoxLogoAlt>
                    <LogoAlt src = {logoAlt}/>
                </BoxLogoAlt>
                
                <FlexColumn>
                    {!isVisibleSearchInput && (
                        <MenuIcon onClick = {changeVisibleDropDownNavigation}/>
                    )}
                    

                    {isVisibleDropDownNavigation && <DropDownNavigation />}
                    
                </FlexColumn>
                
            </Flex>
            

            {!isVisibleSearchInput && (
                <NavBar>
                    <Link exact to = '/' activeStyle = {linkStyles}>Home</Link>
                    <Link to = '/Profile' activeStyle = {linkStyles}>Perfil</Link>
                    <Link to = '/Discover' activeStyle = {linkStyles}>Discover</Link>
                </NavBar>
            )}
            

            <NavIcons>

                {isVisibleSearchInput ? (
                   
                    <BoxSearch>
                        <SearchIcon onClick = {changeVisibleSearchInput}/>
                        <Input
                        placeholder = 'Busque uma pessoa' 
                        autoFocus
                        onBlur = {changeVisibleSearchInput}/>
                    </BoxSearch>
                   
                ) : (
                    <ButtonIcon onClick = {changeVisibleSearchInput}>
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