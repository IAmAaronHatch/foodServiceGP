import axios from 'axios'

let initialState = {
    data: null,
    userLat: null,
    userLon: null,
}

const FULFILLED = '_FULFILLED'

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + FULFILLED:
            return { ...state, data: action.payload.data }
        case GET_LAT:
            return { ...state, data: action.payload}
        case GET_LON:
            return { ...state, data: action.payload }
        case LOGOUT + FULFILLED:
            return { ...state, data: null }
        default: return state
    }
}

//Action Creators

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/api/currentUser')
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: axios.get('/api/logout')
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