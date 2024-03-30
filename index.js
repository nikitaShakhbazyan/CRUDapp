const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8181;

const url = `http://localhost:${PORT}`


app.get('/', (req,res) => {
    res.send("Hi guys!!!")
})

app.listen(PORT,() => {
    console.log(`Server is listening on ${url}`)
})