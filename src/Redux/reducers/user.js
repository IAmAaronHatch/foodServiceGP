import axios from 'axios'

let initialState = {
    data: null,
    userLat: null,
    userLon: null,
}

const FULFILLED = '_FULFILLED'

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

//Lat and Lon 
const GET_LAT = 'GET_LAT'
const GET_LON = 'GET_LON'

export default function reducer (state = initialState, action) {
    switch(action.type) {
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

export function getLat (lat) {
    return {
        type: GET_LAT,
        payload: lat
    }
}

export function getLon (lon) {
    return {
        type: GET_LON,
        payload: lon
    }
}