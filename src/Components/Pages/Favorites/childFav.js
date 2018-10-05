import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavorite, changeDesc } from '../../../Redux/reducers/favorites'
import { setRestLat, setRestLon } from '../../../Redux/reducers/rest'
import object from '../../../_util/methods'
import { Link } from 'react-router-dom'
import './childFav.css'
let { deleteFav } = object;

class ChildFav extends Component {
    constructor() {
        super()

        this.state = {
            canEdit: false,
            editValue: '',
            isOpen: false
        }
    }
    toggleEdit = (desc) => {
        this.setState({
            canEdit: true,
            editValue: desc
        })
    }

    toggleOpen = () => {
        this.setState ({
            isOpen: !this.state.isOpen
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

    dltFavorite = (restId) => {
        let { deleteFavorite } = this.props
        // deleteFav(restId).then(results => {
        //     console.log(results)
        //     return deleteFavorite( results.data)
        // })
        deleteFavorite(deleteFav(restId))
    }

    render() {
        let { fav } = this.props
        let { isOpen } = this.state
        return (
            <div className='fav-main'>
                <div key={fav.id}
                className='fav-container'>
                    <h1 onClick={this.toggleOpen}>Name: {fav.name}</h1>
                    {
                        isOpen ?
                        <div className='opened-fav'>
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
                                <button onClick={() => this.dltFavorite(fav.rest_id)}>Delete</button>
                        </div> :
                        null
                        
                    }
                    
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
