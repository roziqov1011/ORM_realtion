const { Branches, RestaurantBranches, Restaurants } = require('../models/model')

module.exports = {
    GET: async(_, res) => {
        try {
            res.send(await Branches.findAll({
                include: Restaurants
            }))
        } catch(err) {
            res.sendStatus(500)
        }
    },
    POST: async(req, res) => {
        try {
            const { name, restaurantId } = req.body
            const newBranch = await Branches.create({ name })

            await RestaurantBranches.create({ branchId: newBranch.id, restaurantId })

            res.send(newBranch)
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    POST_BOLISH: async(req, res) => {
        try {
            const { branchId, restaurantId } = req.body

            const newConnect = await RestaurantBranches.create({ branchId, restaurantId })

            res.send(newConnect)
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}