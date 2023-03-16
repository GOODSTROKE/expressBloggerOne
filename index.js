const express = require('express')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blog')
// const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const app = express()
require('dotenv').config()

const uri = process.env.MONGO_URI
const PORT = process.env.PORT

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
  }
}

connect()

// app.use('/', indexRouter)
app.use('/blogs', blogRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
