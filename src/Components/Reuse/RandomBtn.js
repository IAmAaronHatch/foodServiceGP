import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getRestaurants, getFiveList } from '../../Redux/reducers/rest';
class RandomBtn extends Component {

    newRestaurants = (userLat, userLon, start,cuisine) => {
        let { getRestaurants } = this.props
        axios.get(`https://developers.zomato.com/api/v2.1/search?start=${start}&count=${20}&lat=${userLat}&lon=${userLon}&radius=5000&cuisine=${cuisine}`, { headers: { 'user-key': process.env.REACT_APP_API_KEY } }).then(response => {
            getRestaurants(response.data.restaurants)
        })
    }

    // newRestaurants takes in the users lat and lon, makes a call to Zomato api, and returns an array of obj restaurants

    randomize = (rest) => {
        let { getFiveList } = this.props
        let sorted = [...rest]
        let fiveList = sorted.sort(function (a, b) { return 0.5 - Math.random() })
        fiveList.splice(4, 15)
        return getFiveList(fiveList)
    }
    //randomize is what takes in that data array from redux, sorts it based on the index randomly, creates a new array, and gets 5 off of that new array. 

    componentDidUpdate(prevProps) {
        if(prevProps.rest.length !== this.props.rest.length){
            this.randomize(this.props.rest)
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.newRestaurants(this.props.userLat, this.props.userLon)}>getRestaurants</button>
               
            </div>
        )
    }
}

//this.props.rest.restaurants == [{},{},{}] == {restaurant: {}}

let mapStateToProps = state => {
    return {
        rest: state.rest.data,
        userLat: state.user.userLat,
        userLon: state.user.userLon,
    }
}

export default connect(mapStateToProps, { getRestaurants, getFiveList } )(RandomBtn)
