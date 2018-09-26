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

// request.post({
//     url: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
//     json: true,
//     form: {
//       'f': 'json',
//       'client_id': process.env.ESRI_CLIENT_ID,
//       'client_secret': process.env.ESRI_SECRET,
//       'grant_type': 'client_credentials',
//       'expiration': '1440'
//     }
// }, function(error, response, body){
//     process.env.ESRI_TEMP_TOKEN=body.access_token;
//     console.log(body);
    
// });

// request.post({
//     url: 'http://geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer/Geoenrichment/enrich',
//     json:true,
//     form: {
//       f: 'json',
//       token: process.env.ESRI_TEMP_TOKEN,
//     }
//   }, function(error, response, body){
//     console.log(body);
//   });

app.get('/api/cuisine', RestCtrl.getCuisine)

app.get('/auth/callback', AuthCtrl.auth)

app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
})

app.get('/api/favorites/:id', FavsCtrl.getAll)
// app.put('/api/favorite', FavsCtrl)
// app.post('/api/favorite', FavsCtrl)
// app.delete('/api/favorite', FavsCtrl)


// YELP API
app.post('/api/yelp', RestCtrl.getRest)



app.listen(port, () => {
        console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})