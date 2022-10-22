const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000

const hotels = require("./hotels.json")

app.listen(port, (req, res) => {
    console.log("Travel-guru server is running on port", port)
})

app.get("/", (req, res) => {
    res.send("Travel-guru server is running")
})

app.get("/hotels", (req, res) => {
    res.send(hotels)
})
app.get("/hotels/:id", (req, res) => {
    const id = req.params.id
    const hotel = hotels.find(each => each.id === id)
    res.send(hotel)
})
