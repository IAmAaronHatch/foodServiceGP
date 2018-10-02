
let initialState = {
    data: '',
    userLat: '',
    userLon: '',
    userCity: '',
}


const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

const SET_LAT = 'SET_LAT'
const SET_LON = 'SET_LON'

const SET_CITY = 'SET_CITY'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, data: action.payload }
        case SET_LAT:
            return { ...state, userLat: action.payload}
        case SET_LON:
            return { ...state, userLon: action.payload }
        case SET_CITY:
            return {...state, userCity: action.payload}
        case LOGOUT:
            return { ...state, data: action.payload }
        default: return state
    }
}

//Action Creators

export function getUser(name) {
    return {
        type: GET_USER,
        payload: name
    }
}

export function logout(val) {
    return {
        type: LOGOUT,
        payload: val
    }
}

export function setLat(lat) {
    return {
        type: SET_LAT,
        payload: lat
    }
}

export function setLon(lon) {
    return {
        type: SET_LON,
        payload: lon
    }
}

export function setCity (input) {
    console.log(input)
    return {
        type: SET_CITY,
        payload: input
    }
}