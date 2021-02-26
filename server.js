const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const db = require('./models')
// const cookieParse = require('cookies-parser)

// middleware
const rowdyRes = rowdy.begin(app)
app.use(require('morgan')('tiny'))
app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.use("/user", require("./controllers/usersController.js"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  rowdyRes.print()
})



/* Some Routes */
