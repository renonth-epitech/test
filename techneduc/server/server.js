const express = require('express')
const cors = require('cors')
const uuid = require('uuid')
const bodyParser = require("body-parser");

const PORT = 8080

const app = express()
app.use(cors())
app.use(bodyParser.json())

db = {}

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

// require param 'key'
app.get('/entity', (req, res) => {
    if (req.query.id !== null && db[req.query.key]?.some((e) => e.id === req.query.id)) {
        res.send(db[req.query.key].find(e => req.query.id === e.id))
        return
    }
    res.send(db[req.query.key] ?? [])
})

app.get('/lecture', (req, res) => {
    res.send({})
})

// require param 'key'
app.post("/add", (req, res) => {
    if (db[req.query.key] == null)
        db[req.query.key] = []

    if (req.body.id != null && db[req.query.key].some((e) => e.id === req.body.id)) {
        let index = db[req.query.key].findIndex((e) => e.id === req.body.id)
        db[req.query.key].splice(index, 1)
    }

    db[req.query.key].push({
        ...req.body,
        'id': req.query.id ?? uuid.v4()
    })

    res.send("OK")
})