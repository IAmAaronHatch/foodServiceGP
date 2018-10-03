import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavorite, changeDesc } from '../../../Redux/reducers/favorites'
import { yelpWithId } from '../../../_util/methods'
import { setRestLat, setRestLon } from '../../../Redux/reducers/rest'
import { Link } from 'react-router-dom'


class ChildFav extends Component {
    constructor() {
        super()

        this.state = {
            canEdit: false,
            editValue: ''
        }
    }
    toggleEdit = (desc) => {
        this.setState({
            canEdit: true,
            editValue: desc
        })
    }

    handleUpdate = (e) => {
        this.setState({
            editValue: e.target.value
        })
    }
    saveUpdate = (restId) => {
        let { changeDesc } = this.props;
        changeDesc(restId, this.state.editValue)
        this.setState({
            canEdit: false,
            editValue: ''
        })
    }

    coords = async (fav) => {
        let { setRestLat, setRestLon } = this.props
        let { lat, lon } = fav
        setRestLat(lat)
        setRestLon(lon)
        
    }

    render() {
        let { fav, deleteFavorite } = this.props
        console.log('favs', this.props.favorites)
        return (
            <div>
                <div key={fav.id}>
                    <h1>Name: {fav.name}</h1>
                    <span>Phone: {fav.phone}</span>
                    <br />
                    {
                        this.state.canEdit ?
                            <div>
                                <input value={this.state.editValue} onChange={this.handleUpdate} />
                                <button onClick={() => this.saveUpdate(fav.rest_id)}>Save</button>
                            </div>
                            :
                            <span>{fav.description}</span>
                    }
                    <button onClick={() => this.toggleEdit(fav.description)}>Edit</button>
                    <br />
                    <Link to={`/restaurants/${fav.rest_id}`} onClick={async () => await this.coords(fav)}>Navigate</Link>
                    <button onClick={() => deleteFavorite(fav.rest_id)}>Delete</button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        favorites: state.favorites.data
    }
}


export default connect(mapStateToProps, {deleteFavorite, changeDesc, setRestLat, setRestLon})(ChildFav)
