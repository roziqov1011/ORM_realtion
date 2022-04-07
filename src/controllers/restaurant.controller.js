const { Restaurants, Branches, RestaurantBranches } = require('../models/model')

module.exports = {
    GET: async(_, res) => {
        try {
            res.send(await Restaurants.findAll({
                include: Branches
            }))
        } catch(err) {
            res.sendStatus(500)
        }
    },
    POST: async(req, res) => {
        try {
            const { name, branchId } = req.body
            const newRestaurant = await Restaurants.create({ name })

            res.send(newRestaurant)
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}