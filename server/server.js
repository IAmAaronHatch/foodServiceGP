const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')

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

app.get('/auth/callback', AuthCtrl.auth)

app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
})

app.listen(port, () => {
        console.log(`Never gonna give  up, Never gonna let  down.`)
})