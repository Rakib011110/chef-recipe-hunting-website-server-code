
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())

const chefs = require("./data/data.json")

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/chefs", (req, res) => {
    res.send(chefs)
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})