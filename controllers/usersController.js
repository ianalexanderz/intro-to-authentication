const router = require("express").Router();
const models = require("../models");


router.get("/new", async (req, res) => {
  res.render("users/new")
});

router.post('/', async (req, res) => {
  const user = await models.user.create({
    email: req.body.email,
    password: req.body.password
  })

  res.cookie('userId', userId)
  res.redirect('/')
})

/* check if that user's password matches the incoming password */
/* router.post('/login', (res, req) => {
  const user = await models.user.findOne 
    ({
      where: { email: req.body.email }
    })
  
    if (user.password === req.body.password) {
       res.cookie('userId', user.id)
       res.redirct('/')
    } else {
      res.render('users/login')
    }
  })
 */




module.exports = router;

