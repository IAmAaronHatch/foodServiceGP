import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
        let { rest, user } = this.props
        return (
            <div key={rest.id}>
                <h3 onClick={this.toggleOpen}>Name:{rest.name}</h3>
                <h3>Price Range: {rest.price}</h3>
                {
                    this.state.isOpen ?
                        <div>
                            <h3>Phone Number: {rest.display_phone}</h3>
                            <h3>Address: {rest.location.address1}</h3>
                            <h3>Type: {rest.categories[0].alias}</h3>
                            <div>
                                {
                                    user ?
                                        <button onClick={() => { this.props.createFavorite(rest.id, rest.name, rest.phone, rest.coordinates.latitude, rest.coordinates.longitude) }}>Add To Favorites</button>
                                        : null
                                }
                            </div>
                            <Link onClick={() => this.coords(rest.coordinates.latitude, rest.coordinates.longitude)} restaurant={rest} to={`/restaurants/${rest.id}`}>View More</Link>
                        </div> :
                        null
                } 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(ChildList)
