const axios = require('axios')
module.exports = {
    RandomizePt1: (rest) => {
        let sorted = [...rest]
        let fiveList = sorted.sort(function (a, b) { return 0.5 - Math.random() })
        fiveList.splice(4, 45)
        return fiveList
    },
    login: () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
        window.location = location
    },
    randomNum: () => {
        return Math.floor(Math.random() * 4) + 1
    },
    error: () => {
        alert('cannot find your location')        
    },
    yelpWithId: (restId) => {
        axios.get(`/api/yelp/${restId}`).then(response => {
            console.log(response.data)
        })

        //WavvLdfdP6g8aZTtbBQHTw
    },
    getName: () => {
        return axios.get('/api/currentUser')
    },
    logoutUser: () => {
        axios.get('/api/logout').then(response => {
            return true
        })
    },
    cuisineNames: () => {
       return axios.get('/api/cuisineNames')
    }
    

}