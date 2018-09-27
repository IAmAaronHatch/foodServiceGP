import React, { Component } from 'react'
import Map from '../RP/Map'
import Nav from '../Reuse/Nav'
import LessRandom from '../Reuse/lessRandom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createFavorite } from '../../Redux/reducers/favorites'
import { setRestLat, setRestLon } from '../../Redux/reducers/rest'


class ListView extends Component {

    componentDidMount() {
        if (!this.props.fiveList.length) {
            this.props.history.push('/')
        }
    }
    coords = (lat, lon) => {
        this.props.setRestLat(lat)
        this.props.setRestLon(lon)
    }

    render() {
        let { fiveList, user } = this.props
        return (
            <div>
                <Nav />
                <div>
                    <Map styles={{ height: '40vh' }} zoom='10' />
                </div>
                <div style={{ height: '60vh', backgroundColor: 'render' }}>
                    <ul>
                        {fiveList.map((rest) => (
                            <li className="restListItem" key={rest.id} >
                                <h3>Name:{rest.name}</h3>
                                <h3>Phone Number: {rest.display_phone}</h3>
                                <h3>Address: {rest.location.address1}</h3>
                                <h3>Type: {rest.categories[0].alias}</h3>
                                <h3>Price Range: {rest.price}</h3>
                                <button onClick={() => { this.props.createFavorite(rest.id, user.id) }}>Add To Favorites</button>
                                <Link  onClick={() => this.coords(rest.coordinates.latitude, rest.coordinates.longitude)} restaurant={rest} to={`/restaurants/${rest.id}`}>View More</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <LessRandom />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        fiveList:state.rest.fiveList,
        user: state.user.data
    }
}

export default connect(mapStateToProps, { createFavorite, setRestLat, setRestLon})(ListView)
