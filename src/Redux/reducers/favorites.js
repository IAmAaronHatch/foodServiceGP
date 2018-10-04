import axios from 'axios'


//Im setting data = null for now, we can go back in and decide if we want to break this down at all or just send all the info through and sort through it later.
let initialState = {
    data: [],
    newRank: []
}

const FULFILLED = '_FULFILLED'

const GET_FAVORITES = 'GET_FAVORITES'
const CREATE_FAVORITES = 'CREATE_FAVORITES'
const CHANGE_DESC = 'CHANGE_DESC'
const DELETE_FAVORITE = 'DELETE_FAVORITE'

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FAVORITES + FULFILLED:
            return { ...state, data: action.payload }
        case CREATE_FAVORITES + FULFILLED:
            return { ...state, data: action.payload }
        case CHANGE_DESC + FULFILLED:
            return { ...state, data: action.payload }
        case DELETE_FAVORITE + FULFILLED:
            return { ...state, data: action.payload }
        default: return state
    }
}



export function getFavorites (val) {
    return {
        type: GET_FAVORITES,
        payload: val
    }
}

export function createFavorite (restId, name, phone, lat, lon) {
    let newFav = axios.post(`/api/favorite/${restId}`, { name, phone, lat, lon }).then(results => {
        return results.data
    })
    return {
        type: CREATE_FAVORITES,
        payload: newFav
    }
}

export function changeDesc (restId, desc) {
    let updated = axios.put(`/api/favorite/desc/${restId}`, { desc }).then(results => {
        return results.data
    })
    return {
        type: CHANGE_DESC,
        payload: updated
    }
}

export function deleteFavorite (val) {
    console.log(val)
    return {
        type: DELETE_FAVORITE,
        payload: val
    }
}