import React from 'react'
import { Route, Switch } from 'react-router-dom'

//importing components 
import ESRIMap from './Components/RP/Map'
import Landing from './Components/Pages/Landing/Landing'
import ListView from './Components/Pages/ListView'
import FullView from './Components/Pages/FullView'
import Favorites from './Components/Pages/Favorites/Favorites'

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/map' component={ESRIMap}/>
            <Route exact path='/restaurants' component={ListView} />
            <Route path='/restaurants/:restId' component={FullView} />
            <Route path='/favorites' component={Favorites} />
        </Switch>
    )
}