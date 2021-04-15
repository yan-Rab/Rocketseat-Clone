import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    
}

:root{
    --gray-dark: #202024;
    --background: #121214;
    --purple: #8257E6;
    --green: #04D361;
    --text: #a8a8b3;
    --title: #ffffff;
    --icons: #FFFFFF;
}

html{
    font-size: 62.5%;
}

body{
    background: var(--background);

}

`

export const linkStyles = {
    borderBottomColor: 'var(--purple)', 
    borderBottomWidth: 2, 
    borderBottomStyle: 'solid',
    color: 'var(--title)'
}

export const linkStylesDropDown = {
    borderLeftColor: 'var(--purple)', 
    borderLeftWidth: 2, 
    borderLeftStyle: 'solid',
    color: 'var(--title)'
}



