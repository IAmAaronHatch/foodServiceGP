
let initialState = {
    data: [],
    fiveList: [],
    restLat: '',
    restLon: '',
    userCuisine: 'restaurants',
    price: '1, 2, 3, 4',
}
//cuisine will be set to a number value to later be matched to a type of cuisine of the database


// const FULFILLED = '_FULFILLED'

const GET_REST = 'GET_REST'
const GET_FIVE_LIST = 'GET_FIVE_LIST'
const SET_CUISINE = 'SET_CUISINE'
const SET_PRICE = 'SET_PRICE'

export default function reducer(state = initialState, action) {
    switch(action.type) {   
        case GET_REST: 
            return {...state, data: action.payload}
        case GET_FIVE_LIST:
            return {...state, fiveList: action.payload}
        case SET_CUISINE:
            return {...state, userCuisine: action.payload}
        case SET_PRICE:
            return {...state, price: action.payload}
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

export function setCuisine () {
    return {
        type: SET_CUISINE,
        payload: ''
    }
}

export function setPrice (num) {
    return {
        type: SET_PRICE,
        payload: num
    }
}

