import React from 'react'
import Header from './components/Header'
import Routes from './routes'
import {DropDownContextProvider} from './Contexts/DropDownContext'
import {GlobalStyles} from './GlobalStyles'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div style = {{width: '100%', height: '100vh', maxHeight: '100vh'}}>
      <GlobalStyles />
      
      <BrowserRouter>
        <DropDownContextProvider>
          <Header />
          <Routes />
        </DropDownContextProvider>
      </BrowserRouter>     
    </div>
  );
}

export default App;
