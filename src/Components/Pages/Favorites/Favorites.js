import React, { Component } from 'react'
import { getUser, logout } from '../../../Redux/reducers/user'
import { connect } from 'react-redux'

class Favorites extends Component {

    componentDidMount() {
        let { getUser } = this.props;
        getUser()
    }
    logout = () => {
        let { logout, history } = this.props;
        logout()
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
                        <p>{user.name}</p>
                    </div> : <p>No one is logged in</p>
                }
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, { getUser, logout })(Favorites)
