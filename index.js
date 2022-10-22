const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Travel-guru server is running")
})

app.listen(port, (req, res) => {
    console.log("Travel-guru server is running on port", port)
})