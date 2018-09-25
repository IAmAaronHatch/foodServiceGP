import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getRestaurants, getFiveList } from '../../Redux/reducers/rest';


class RandomBtn extends Component {
// Zomato
    // newRestaurants = (userLat, userLon, cuisine) => {
    //     let { getRestaurants } = this.props
    //     axios.get(`https://developers.zomato.com/api/v2.1/search?start=${Math.floor(Math.random() * 80)}&lat=${userLat}&lon=${userLon}&radius=5000&cuisine=${cuisine}&sort=real_distance`, { headers: { 'user-key': process.env.REACT_APP_API_KEY } }).then(response => {
    //         getRestaurants(response.data.restaurants)
    //     })
    // }
    // newRestaurants takes in the users lat and lon, makes a call to Zomato api, and returns an array of obj restaurants

    
    
    newRestaurants = () => {
        
    }

    // randomize = (rest) => {
    //     let { getFiveList } = this.props
    //     let sorted = [...rest]
    //     let fiveList = sorted.sort(function (a, b) { return 0.5 - Math.random() })
    //     fiveList.splice(4, 15)
    //     return getFiveList(fiveList)
    // }

    //randomize is what takes in that data array from redux, sorts it based on the index randomly, creates a new array, and gets 5 off of that new array. 

    // componentDidUpdate(prevProps) {
    //     if(prevProps.rest.length !== this.props.rest.length){
    //         this.randomize(this.props.rest)
    //     }
    // }


    render() {
        return (
            <div>
                <button onClick={() => {
                    let { userLat, userLon, cat, price } = this.props
                    axios.post('/api/yelp', { lat: userLat, lon: userLon, price: price, cat: cat }).then(response => {
                        console.log(response.data)
                    })
                }}>Randomize!</button>
               
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
