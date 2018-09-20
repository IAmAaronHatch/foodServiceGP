import React, { Component } from 'react'
import Map from '../RP/Map'

class PrimaryView extends Component {

    render() {
        return (
            <div>
                <div>
                    <Map styles={{ height: 'calc(55vh - 175px)'}}/>
                </div>
                <div style={{ height: '75vh', backgroundColor: 'red'}}>
                    List View
                </div>
                <button>Randomize!</button>
            </div>
        )
    }
}

export default PrimaryView
