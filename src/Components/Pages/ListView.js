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
                    <Map styles={{ height: '40vh'}} zoom='10'/>
                </div>
                <div style={{ height: '60vh', backgroundColor: 'render'}}>
                    List View
                </div>
                <RandomBtn/>
            </div>
        )
    }
}


export default ListView
