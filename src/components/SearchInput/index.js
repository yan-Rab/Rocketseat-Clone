import React, {useContext} from 'react'
import {DropDownContext} from '../../Contexts/DropDownContext'

import {
Container,
SearchIcon,
Input
} from './styles'

export default function SearchInput(){
    const {
        changeVisibleSearchInput
    } = useContext(DropDownContext)
    return(
        <Container>
            <SearchIcon />
            <Input 
            type = 'text' 
            placeholder = 'Busque uma pessoa'
            autoFocus
            onBlur = {changeVisibleSearchInput}
            />
        </Container>
    )
}