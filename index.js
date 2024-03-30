const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const contactRoutes = require('./routes/contactsRoutes')
const categoryRoutes = require('./routes/categoriesRoutes')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 8181;
const url = `http://localhost:${PORT}`;

app.use(express.json())
app.use('/api/contacts',contactRoutes)
app.use('/api/categories',categoryRoutes)
app.use(errorHandler)

app.listen(PORT,() => {
    console.log(`Server is listening on ${url}`)
})