const express = require('express')
const app = express()
const port = process.env.PORT || 80

let locations = require('../data/data.js')

app.use(express.static('frontend'))

app.post('/data', function(req, res) {
    locations.forEach((i) => {
        i.text = '?'
        i.terrain = '?'
        i.item = '?'

        if (i.status == 'U') i.name = '?'
    })

    res.send(locations)
})

app.listen(port, () => {
    console.log(`Listeing on http://localhost:${port}`)
})