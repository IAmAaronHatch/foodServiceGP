import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFavorites } from '../../../Redux/reducers/favorites'
// import axios from 'axios'
import { getUser, logout } from '../../../Redux/reducers/user'
import { getName, logoutUser } from '../../../_util/methods'

class Favorites extends Component {

    componentDidMount() {
        let { getUser } = this.props;
        getName().then(results => {
            getUser(results.data)
        })
    }
    logout = () => {
        let { logout, history } = this.props;
        logoutUser()
        logout("")
        history.push('/')
    }
    render() {
        let { user } = this.props
        return (
            <div>
                Favorites
                {
                    user ? 
                    <div>
                        <p>{user}</p>
                    </div> : <p>No one is logged in</p>
                }
                <div className='favorites-list'>
                    {/* <div>
                        {this.props.favorites.map((favorites) => (
                            <div key={favorites.rest_id}>
                                <span>{favorites.name}</span>
                                <span>{favorites.phone}</span>
                            </div>
                        ))}
                    </div> */}


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
