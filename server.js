require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/registers')
const userRoutes = require('./routes/loginRouter')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/Login', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to db, listening in port',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
