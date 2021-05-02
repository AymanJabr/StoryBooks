// For all main routes, routes that are not followed by anything, eg: /auth/
const express = require('express')
const router = express.Router()


//@desc Login/Landing Page
//@route GET /
router.get('/', (req, res) => {
    res.render("login")
})

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render("dashboard")
})



module.exports = router