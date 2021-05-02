// For all main routes, routes that are not followed by anything, eg: /auth/
const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')


//@desc Login/Landing Page
//@route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render("login", {
        layout: 'login'
    })
})

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render("dashboard")
})



module.exports = router