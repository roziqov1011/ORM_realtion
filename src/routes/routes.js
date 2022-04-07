const express = require('express')
const router = express.Router()

const RestaurantController = require('../controllers/restaurant.controller')
const BranchController = require('../controllers/branches.controller')

router
    .get('/author', RestaurantController.GET)
    .get('/books', BranchController.GET)
    .post('/author', RestaurantController.POST)
    .post('/books', BranchController.POST)
    .post('/connect', BranchController.POST_BOLISH)

module.exports = router