const express = require('express') //import package express
const cors = require('cors') //import package cors
const port = 3200
const userEndpoint = require('./routes/users')

const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log('database ready'))


const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userEndpoint)

app.listen(port,() => console.log(`running server on port ${port}`)) //()=> arrow function //app.listen agar server ga mati(menyala terus)