import React from 'react'
import { Route, Switch } from 'react-router-dom'

//importing components 
import Map from './Components/RP/Map'
import Landing from './Components/Pages/Landing/Landing'
import PrimaryView from './Components/Pages/PrimaryView'
import FullView from './Components/Pages/FullView'
import Favorites from './Components/Pages/Favorites/Favorites'

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/map' component={Map}/>
            <Route path='/restaurants' component={PrimaryView} />
            <Route path='/restaurants/:restId' component={FullView} />
            <Route path='/favorites' component={Favorites} />
        </Switch>
    )
}