const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const contactRoutes = require('./routes/routes')
const PORT = process.env.PORT || 8181;

const url = `http://localhost:${PORT}`


app.use('/api/contacts',contactRoutes)

app.listen(PORT,() => {
    console.log(`Server is listening on ${url}`)
})