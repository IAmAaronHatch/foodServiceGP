import axios from 'axios'

let initialState = {
    data: null,
    userLat: null,
    userLon: null,
}

const FULFILLED = '_FULFILLED'

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

const SET_LAT = 'SET_LAT'
const SET_LON = 'SET_LON'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + FULFILLED:
            return { ...state, data: action.payload.data }
        case SET_LAT:
            return { ...state, data: action.payload}
        case SET_LON:
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