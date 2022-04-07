const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://hptwsijh:tgSFDkHYIb-QnRlD9UHiNnotIzLP7Nqz@batyr.db.elephantsql.com/hptwsijh')

const Restaurants = sequelize.define('restaurants', {
    
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            min: 3
        }
    }
})

const Branches = sequelize.define('branches', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            min: 3,
            max: 64
        }
    }
})

const RestaurantBranches = sequelize.define('restaurant_branch', {
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurants,
            key: 'id'
        }
    },
    branchId: {
        type: DataTypes.INTEGER,
        references: {
            model: Branches,
            key: 'id'
        }
    }
})

Restaurants.belongsToMany(Branches, { through: RestaurantBranches })
Branches.belongsToMany(Restaurants, { through: RestaurantBranches })

module.exports = {
    Restaurants,
    Branches,
    RestaurantBranches,
    sequelize
}