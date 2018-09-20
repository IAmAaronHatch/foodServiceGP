import axios from 'axios'

let initialState = {
    data: null,
    restLat: null,
    restLon: null
}
const FULFILLED = '_FULFILLED'

const GET_REST = 'GET_REST'

export default function reducer(state = initialState, action) {
    switch(action.type) {   
        case GET_REST + FULFILLED: 
            return {...state, data: action.payload.data}
        default: return state
    }
}

getRestaurants()
export function getRestaurants() {
    let lat = '40.761750'
    let lon = '-111.890708'
    return {
        type: GET_REST,
        payload: axios.get(`https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines&sort=real_distance`, { headers: { 'user-key': process.env.REACT_APP_API_KEY}})
    }
}