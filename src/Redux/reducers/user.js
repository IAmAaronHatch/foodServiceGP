// import axios from 'axios'

let initialState = {
    data: null
}

// const FULFILLED = '_FULFILLED'

// const GET_USER = 'GET_USER'
// const LOGOUT = 'LOGOUT'

export default function reducer (state = initialState, action) {
    switch(action.type) {
        default: return state
    }
}

//Action Creators

// export function getUser() {
//     return {
//         type: GET_USER,
//         payload: axios.get('/api/currentUser')
//     }
// }

// export function logout() {
//     return {
//         type: LOGOUT,
//         payload: axios.get('/api/logout')
//     }
// }