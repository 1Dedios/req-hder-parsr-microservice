const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hello, World!')); 

app.get('/dedios', (req, res) => {
    const status = {
        status: 200
    }

    res.send(status)
})

app.get('/api/whoami', (req, res) => {
    const ip = req.headers('X-Forwarded-For')

    res.send({ip})
})

app.listen(port, () => console.log('Starting server...'))