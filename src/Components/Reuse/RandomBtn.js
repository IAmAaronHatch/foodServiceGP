import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getRestaurants, getFiveList } from '../../Redux/reducers/rest';
import { withRouter } from 'react-router-dom'
import object from '../../_util/methods'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let { RandomizePt1 } = object

class RandomBtn extends Component {

    newRestaurants = () => {
        let { userLat, userLon, cat, price, getRestaurants, userCity } = this.props

        axios.post('/api/yelp', { lat: userLat, lon: userLon, price: price, cat: cat, local: userCity }).then(response => {
            getRestaurants(response.data)
        })
    }

    randomize = (rest) => {
        let { getFiveList, history } = this.props
        let fiveList = RandomizePt1(rest)
        getFiveList(fiveList)
        history.push('/restaurants')
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rest.length !== this.props.rest.length) {
            this.randomize(this.props.rest)
        }

    }

    notify = () => {
        toast.error('Please Select A Location Before Randomizing', { position: toast.POSITION.TOP_CENTER })

    }

    handleNewRestaurants = () => {
        let { userLat, userLon, userCity } = this.props
        if (userLat && userLon || userCity) {
            this.newRestaurants()
        } else {
            this.notify()
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleNewRestaurants}>Randomize!</button>
                <ToastContainer
                    autoClose={3000}
                    hideProgressBar={true}
                    closeOnClick
                />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        rest: state.rest.data,
        userLat: state.user.userLat,
        userLon: state.user.userLon,
        userCity: state.user.userCity,
        cat: state.rest.userCuisine,
        price: state.rest.price,
        phone: state.rest.phone
    }
}

export default withRouter(connect(mapStateToProps, { getRestaurants, getFiveList })(RandomBtn))
