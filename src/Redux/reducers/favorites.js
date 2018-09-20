// import axios from 'axios'


//Im setting data = null for now, we can go back in and decide if we want to break this down at all or just send all the info through and sort through it later.
let initialState = {
    data: null
}

const FULFILLED = '_FULFILLED'

const GET_FAVORITES = 'GET_FAVORITES'
const CREATE_FAVORITES = 'CREATE_FAVORITES'
const UPDATE_ORDER = 'UPDATE_ORDER'
const DELETE_FAVORITE = 'DELETE_FAVORITE'

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FAVORITES + FULFILLED:
            return { ...state, data: action.payload }
        case CREATE_FAVORITES + FULFILLED:
            return { ...state, data: action.payload }
        case UPDATE_ORDER + FULFILLED:
            return { ...state, data: action.payload }
        case DELETE_FAVORITE + FULFILLED:
            return { ...state, data: null}
        default: return state
    }
}

//getFavorites()
//createFavorite()
//updateOrder()
//deleteFavorite()

// export function getFavorites () {
//     return {
//         type: GET_FAVORITES,
//         payload:
//     }
// }

// export function createFavorite () {
//     return {
//         type: CREATE_FAVORITES,
//         payload:
//     }
// }

// export function updateOrder () {
//     return {
//         type: UPDATE_ORDER,
//         payload:
//     }
// }

// export function deleteFavorite (id) {
//     return {
//         type: DELETE_FAVORITE,
//         payload: 
//     }
// }