const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const db = require('./models')
const ejsLayouts = require("express-ejs-layouts")

// middleware
const rowdyRes = rowdy.begin(app)
app.use(require('morgan')('tiny'))
app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.use("/users", require("./controllers/usersController.js"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  rowdyRes.print()
})