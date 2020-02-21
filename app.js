//pp 2
const express = require('express')
const app = express()
const port = 8080

let = offersList = []

app.get('/', (req, res) => res.json(offersList))

app.post('/', (req, res) => {
    offersList.push(`Soy la oferta ${offersList.length + 1}`)
    const response = { offers: offersList }
    res.json( response )
})

app.put('/:offer_id', (req, res) => {
    res.json(offersList.splice(req.params.offer_id, 1, `oferta editada ${req.params.offer_id}`))
})

app.delete('/:offer_id', (req, res) => {
    offersList.splice(req.params.offer_id, 1)
    res.json(offersList)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//pp 1
//console.log("Hello World")