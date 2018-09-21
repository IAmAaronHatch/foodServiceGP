import axios from 'axios'

let initialState = {
    data: [],
    restLat: '',
    restLon: ''
}
const FULFILLED = '_FULFILLED'

const GET_REST = 'GET_REST'

export default function reducer(state = initialState, action) {
    switch(action.type) {   
        case GET_REST + FULFILLED: 
            return {...state, data: action.payload.data.restaurants}
        default: return state
    }
}

// getRestaurants()
export function getRestaurants(lat, lon, cuisine) {
    console.log('getRestaurants', lat, lon)
    return {
        type: GET_REST,
        payload: axios.get(`https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines=${cuisine}&sort=real_distance`, { headers: { 'user-key': process.env.REACT_APP_API_KEY}})
    }
}

// TEST CONFIRMED: the api will call with a null value ^ test included a null 'cuisine' value