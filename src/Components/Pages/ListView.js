import React, { Component } from 'react'
import Map from '../RP/Map'
import Nav from '../Reuse/Nav'
import RandomBtn from '../Reuse/RandomBtn'

class ListView extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <div>
                    <Map styles={{ height: 'calc(55vh - 175px)'}} zoom='10'/>
                </div>
                <div style={{ height: '75vh', backgroundColor: 'red'}}>
                    List View
                </div>
                <RandomBtn/>
            </div>
        )
    }
}


export default ListView
