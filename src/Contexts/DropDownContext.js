import React, {useState} from 'react'
import DropDownAvatar from '../components/DropDownAvatar'
import DropDownIcons from '../components/DropDownIcons'
import SearchInput from '../components/SearchInput'
import WrapperDropDowns from '../components/WrapperDropDowns'

export const DropDownContext = React.createContext({})

export function DropDownContextProvider({children}){

    const [isVisibleDropDownAvatar, setIsVisibleDropDownAvatar] = useState(false)
    const [isVisibleDropDownNotifications, setIsVisibleDropDownNotifications] = useState(false)
    const [isVisibleDropDownInvites, setIsVisibleDropDownInvites] = useState(false)
    const [isVisibleDropDownNavigation, setIsVisibleDropDownNavigation] = useState(false)
    const [isVisibleSearchInput, setIsVisibleSearchInput] = useState(false)

    function changeVisibleDropDownAvatar(){
        setIsVisibleDropDownAvatar(!isVisibleDropDownAvatar)
        setIsVisibleDropDownNotifications(false)
        setIsVisibleDropDownInvites(false)
        setIsVisibleDropDownNavigation(false)
    }

    function changeVisibleDropDownNotifications(){
        setIsVisibleDropDownNotifications(!isVisibleDropDownNotifications)
        setIsVisibleDropDownInvites(false)
        setIsVisibleDropDownAvatar(false)
        setIsVisibleDropDownNavigation(false)
        setIsVisibleSearchInput(false)
    }

    function changeVisibleDropDownInvites(){
        setIsVisibleDropDownInvites(!isVisibleDropDownInvites)
        setIsVisibleDropDownNotifications(false)
        setIsVisibleDropDownAvatar(false)
        setIsVisibleDropDownNavigation(false)
        setIsVisibleSearchInput(false)
    }

    function changeVisibleDropDownNavigation(){
        setIsVisibleDropDownNavigation(!isVisibleDropDownNavigation)
        setIsVisibleDropDownAvatar(false)
        setIsVisibleDropDownNotifications(false)
        setIsVisibleDropDownInvites(false)
        setIsVisibleSearchInput(false)
    }

    function changeVisibleSearchInput(){
        setIsVisibleSearchInput(!isVisibleSearchInput)
        setIsVisibleDropDownAvatar(false)
        setIsVisibleDropDownNotifications(false)
        setIsVisibleDropDownInvites(false)
        setIsVisibleDropDownNavigation(false)
    }

    return(

    <DropDownContext.Provider value = {{
        changeVisibleDropDownAvatar,
        changeVisibleDropDownNotifications,
        changeVisibleDropDownInvites,
        changeVisibleDropDownNavigation,
        isVisibleDropDownNavigation,
        isVisibleSearchInput,
        changeVisibleSearchInput
    }}>

        <WrapperDropDowns>

        {isVisibleSearchInput && <SearchInput />}

        {isVisibleDropDownAvatar && <DropDownAvatar />}
        {isVisibleDropDownNotifications && <DropDownIcons title = 'Notificações'/>}
        
        {isVisibleDropDownInvites && <DropDownIcons title = 'Convites pendentes' rightMargin = '130px'/>}
       
        </WrapperDropDowns>
    
        {children}
    </DropDownContext.Provider>
    
    )
}