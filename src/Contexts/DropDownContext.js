import React, {useState} from 'react'
import DropDownAvatar from '../components/DropDownAvatar'
import DropDownIcons from '../components/DropDownIcons'
import WrapperDropDowns from '../components/WrapperDropDowns'

export const DropDownContext = React.createContext({})

export function DropDownContextProvider({children}){

    const [isVisibleDropDownAvatar, setIsVisibleDropDownAvatar] = useState(false)
    const [isVisibleDropDownNotifications, setIsVisibleDropDownNotifications] = useState(false)
    const [isVisibleDropDownInvites, setIsVisibleDropDownInvites] = useState(false)
    
    function changeVisibleDropDownAvatar(){
        setIsVisibleDropDownAvatar(!isVisibleDropDownAvatar)
        setIsVisibleDropDownNotifications(false)
        setIsVisibleDropDownInvites(false)
    }

    function changeVisibleDropDownNotifications(){
        setIsVisibleDropDownNotifications(!isVisibleDropDownNotifications)
        setIsVisibleDropDownInvites(false)
        setIsVisibleDropDownAvatar(false)
    }

    function changeVisibleDropDownInvites(){
        setIsVisibleDropDownInvites(!isVisibleDropDownInvites)
        setIsVisibleDropDownNotifications(false)
        setIsVisibleDropDownAvatar(false)
    }

    return(

    <DropDownContext.Provider value = {{
        changeVisibleDropDownAvatar,
        changeVisibleDropDownNotifications,
        changeVisibleDropDownInvites
    }}>

        <WrapperDropDowns>

        {isVisibleDropDownAvatar && <DropDownAvatar />}
        {isVisibleDropDownNotifications && <DropDownIcons title = 'Notificações'/>}
        
        {isVisibleDropDownInvites && <DropDownIcons title = 'Convites pendentes' rightMargin = '130px'/>}
       
        </WrapperDropDowns>

        {children}
    </DropDownContext.Provider>
    
    )
}