/* ------------------------------------- LIBS -------------------------------------*/
const express         = require('express')
const userModel       = require('../models/user')


/* ------------------------------------- EXPRESS -------------------------------------*/
router = express.Router()

/* ------------------------------------- ROUTES -------------------------------------*/
router.get('/', function(req,res){
    res.render('home')
})

module.exports = router