

let initialState = {
    data: [],
    fiveList: [],
    restLat: '',
    restLon: ''
}
// const FULFILLED = '_FULFILLED'

const GET_REST = 'GET_REST'
const GET_FIVE_LIST = 'GET_FIVE_LIST'

export default function reducer(state = initialState, action) {
    switch(action.type) {   
        case GET_REST: 
            return {...state, data: action.payload}
        case GET_FIVE_LIST:
            return {...state, fiveList: action.payload}
        default: return state
    }
}

export function getRestaurants(restaurants){
    return {
        type: GET_REST,
        payload: restaurants
    }
}
export function getFiveList(fiveRest){
    return {
        type: GET_FIVE_LIST,
        payload: fiveRest
    }
}

//getCuisine
//this function will fetch the list of cuisines from the db, and then on the front end on landing, we can map over and display that list
