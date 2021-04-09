import {Switch, Route} from 'react-router-dom'
import Discover from './pages/Discover'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function Routes(){
    return(
        
        <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/Profile' component = {Profile} />
            <Route path = '/Discover' component = {Discover}  />
        </Switch>
        
    )
}