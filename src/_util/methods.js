import {getFavorites} from '../Redux/reducers/favorites';
const axios = require('axios')
let someObj = {
    //Tiler
    RandomizePt1(rest) {
        let sorted = [...rest]
        let fiveList = sorted.sort(function (a, b) { return 0.5 - Math.random() })
        fiveList.splice(4, 45)
        return fiveList
    },
    randomNum() {
        return Math.floor(Math.random() * 4) + 1
    },

    //Aaron Harris
    login() {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
        
        window.location = location
    },
    
    error() {
        alert('cannot find your location')        
    },
    getName() {
        return axios.get('/api/currentUser')
    },

    //Aaron Hatch
    yelpWithId: (restId) => {
      return  axios.get(`/api/yelp/${restId}`).then(response => {
            return (response.data)
        })

        //WavvLdfdP6g8aZTtbBQHTw
    },
    logoutUser: () => {
        axios.get('/api/logout').then(response => {
            return (response.name)
        })
    },
    cuisineNames: () => {
       return axios.get('/api/cuisineNames')
    },
    getFaves: () => {
        return axios.get('/api/favorites').then(response => {
            return (response.data)
        })
    },
    deleteFav: (restId) => {
        return axios.delete(`/api/favorite/delete/${restId}`).then(response => {
            return (response.data)
        })
    }
}

export default someObj;