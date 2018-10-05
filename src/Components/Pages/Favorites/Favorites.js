import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser, logout } from '../../../Redux/reducers/user'
import object from '../../../_util/methods'
import { getFavorites } from '../../../Redux/reducers/favorites';
import ChildFav from './childFav'
import Nav from '../../Reuse/Nav'

let { getName, logoutUser, getFaves } = object
class Favorites extends Component {

    componentDidMount() {
        let { getUser, getFavorites } = this.props;
        getName().then(results => {
            getUser(results.data)
        })
        getFavorites(getFaves())
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
            <div className='favorite-all'>
                    <Nav id='nav'/>
                {
                    user ?
                        <div className='welcome'>
                            <h1 id='wel-user'> Welcome {user} to Your Favorites!</h1>
                        </div> : <p>No one is logged in</p>
                }
                {
                    user && favorites.length ? 
                        <div className='fav-list'>
                            {favorites.map((fav, i) => {
                                return (
                                    <ChildFav key={fav.id} fav={fav} />
                                )
                            })}
                        </div> :
                        <p>To View Favorites, Please Login</p>
                            
                }
            

                {/* {favorites.length?
                <div>
                    {favorites.map((fav, i) => {
                        return (
                            <ChildFav key={fav.id} fav={fav}/>
                        )
                    })}
                </div>
                :
                <div>
                    <h3>You have not set any favorites!</h3>
                </div>} */}

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
