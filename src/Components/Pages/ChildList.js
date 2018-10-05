import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createFavorite } from '../../Redux/reducers/favorites'
import './ListView.css'

class ChildList extends Component {
    constructor(props) {
        super()

        this.state = {
            isOpen: false
        }
    }

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        let { rest, user, coords } = this.props
        return (
            <div key={rest.id} >
                <div className='info-box'>
                    <h3 onClick={this.toggleOpen}>{rest.name}</h3>
                    <h4>{rest.price}</h4>

                    {
                        this.state.isOpen ?
                            <div className='rest-box'>
                                <span id='display'>{rest.display_phone}</span>
                                <span id='display'>{rest.location.address1}</span>
                                <span id='display'>Cuisine: {rest.categories[0].alias}</span>
                                    {
                                        user ?
                                            <button className='favorite-btn' onClick={() => { this.props.createFavorite(rest.id, rest.name, rest.phone, rest.coordinates.latitude, rest.coordinates.longitude) }}>Add To Favorites</button>
                                            : null
                                    }
                                <Link className='navigate-btn' onClick={() => coords(rest.coordinates.latitude, rest.coordinates.longitude)} restaurant={rest} to={`/restaurants/${rest.id}`}>Get Directions</Link>
                            </div> :
                            null
                    }
                </div>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, { createFavorite })(ChildList)
