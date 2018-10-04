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

app.use((req, res, next) => {
    if(req.query.test === process.env.REQ_QUERY){
        req.session.user = {
            id: 4
        }
    }
    next()
})

//Auth
app.get('/auth/callback', AuthCtrl.auth)

app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user.name)
})

app.get('/api/logout', (req, res) => {
        req.session.destroy()
        res.sendStatus(200).send(req.session.user)
})

//Food
app.get('/api/cuisineNames', RestCtrl.getCuisine)

//Favs
app.get('/api/favorites', FavsCtrl.getFavorites)
app.put('/api/favorite/desc/:restId', FavsCtrl.changeDesc)
app.post('/api/favorite/:restId', FavsCtrl.createFavorite)
app.delete('/api/favorite/delete/:restId', FavsCtrl.deleteFavorite)


// YELP API
app.post('/api/yelp', RestCtrl.getRest)
app.get('/api/yelp/:id', RestCtrl.getById)


app.listen(port, () => {
        console.log(`Never gonna give ${port} up, Never gonna let ${port} down`)
})