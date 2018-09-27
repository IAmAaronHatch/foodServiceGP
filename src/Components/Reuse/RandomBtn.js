import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getRestaurants, getFiveList } from '../../Redux/reducers/rest';
import {withRouter} from 'react-router-dom'


class RandomBtn extends Component {
 
    newRestaurants = () => {
        let { userLat, userLon, cat, price, getRestaurants, userCity } = this.props

        axios.post('/api/yelp', { lat: userLat, lon: userLon, price: price, cat: cat, local: userCity }).then(response => {
            getRestaurants(response.data)
        })
    }

    randomize = (rest) => {
        let { getFiveList, history } = this.props
        let sorted = [...rest]
        let fiveList = sorted.sort(function (a, b) { return 0.5 - Math.random() })
        fiveList.splice(4, 45)
        getFiveList(fiveList)
        history.push('/restaurants') 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rest.length !== this.props.rest.length){
            this.randomize(this.props.rest)
        }

    }

    render() {
        return (
            <div>
                <button onClick={this.newRestaurants}>Randomize!</button>
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

export default withRouter(connect(mapStateToProps, { getRestaurants, getFiveList } )(RandomBtn))
