import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser, logout } from '../../../Redux/reducers/user'
import { getName, logoutUser } from '../../../_util/methods'
import { getFavorites } from '../../../Redux/reducers/favorites';
import ChildFav from './childFav'
import Nav from '../../Reuse/Nav'

class Favorites extends Component {

    componentDidMount() {
        let { getUser, getFavorites } = this.props;
        getName().then(results => {
            getUser(results.data)
        })
        getFavorites()
    }
    logout = () => {
        let { logout, history } = this.props;
        logoutUser()
        logout("")
        history.push('/')
    }
    
    render() {
        let { user, favorites } = this.props
        return (
            <div>
                <Nav/>
                {
                    user ?
                        <div>
                            <p>{user}</p>
                        </div> : <p>No one is logged in</p>
                }
                <div>
                    {favorites.map((fav, i) => {
                        return (
                            <ChildFav key={fav.id} fav={fav}/>
                        )
                    })}
                </div>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data,
        favorites: state.favorites.data
    }
}

export default connect(mapStateToProps, { getUser, logout, getFavorites })(Favorites)
