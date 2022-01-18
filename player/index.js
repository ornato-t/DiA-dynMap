//Initializing module for IP address retrieval
const os = require('os')
var interfaces = os.networkInterfaces()
var addresses = []

//Initializing express (web framework)
const express = require('express')
const app = express()
const port = process.env.PORT || 80 //If a port is specified by the host (Heroku, Glitch...) use that, otherwise use 80. Will use 80 if ran locally

let locations = require('./data/data.js') //Importing dataset

//Get local IPv4 address
for (var k in interfaces)
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal)
            addresses.push(address.address);
    }

app.use(express.static('frontend')) //Express stuff

//Filter data. Hides from the user the location text (hex key), the terrain information and any item (dream machine component)
//If a location hasn't been explored (status == 'U' as Unexplored) filters out the name as well
app.post('/data', function(req, res) {
    locations.forEach((i) => {
        i.text = '?'
        i.terrain = '?'
        i.item = '?'

        if (i.status == 'U') i.name = '?'
    })

    res.send(locations)
})

//Debug message when running, useful when running locally
app.listen(port, () => {
    console.log(`Listeing on http://${addresses}:${port}`)
})