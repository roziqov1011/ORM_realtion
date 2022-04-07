const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/routes')
const { sequelize } = require('./models/model')

app.use(express.json())
app.use(cors())

sequelize.sync({ force: false })
.then(() => console.log("connected"))
.catch(err => console.log(err))

app.use(router)

app.listen(9000, console.log(9000))