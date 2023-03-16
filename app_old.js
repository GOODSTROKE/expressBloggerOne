// Boiler Plate Libraries

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// layout routour / each folder import
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
// const blogRouter = require('./routes/blogs');
const blogsRouter = require('./routes/blog')

const app = express()
const port = 8004

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//we bind (associate) the routers to routes in our application

app.use('/', indexRouter)
app.use('/users', usersRouter)
// app.use('/blogs', blogsRouter);
app.use('/blogs', blogsRouter)
app.use('/beta', betaRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app