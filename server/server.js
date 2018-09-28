const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
// const request = require('request')

const FavsCtrl = require('./Controllers/FavsCtrl')
const RestCtrl = require('./Controllers/RestCtrl')
const AuthCtrl = require('./Controllers/AuthCtrl')

require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT

massive(process.env.CONNECTION_SESSION).then(db => {
    app.set('db', db)
    console.log(`Never gonna run around and desert db!`)
}).catch(err => console.log(err))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

app.use(bodyParser.json())

//Auth
app.get('/auth/callback', AuthCtrl.auth)

app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
})

//Food
app.get('/api/cuisine', RestCtrl.getCuisine)

//Favs
app.get('/api/favorites', FavsCtrl.getFavorites)
// app.put('/api/favorite', FavsCtrl.changeOrder)
app.post('/api/favorite/newfavorite/:restId', FavsCtrl.createFavorite)
app.delete('/api/favorite/:id', FavsCtrl.deleteFavorite)


// YELP API
app.post('/api/yelp', RestCtrl.getRest)
app.get('/api/yelp/:id', RestCtrl.getById)


app.listen(port, () => {
        console.log(`Never gonna give ${port} up, Never gonna let ${port} down`)
})