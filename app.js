const express = require('express')
const morgan = require('morgan')
const passwordRoute = require('./passwordRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/passwords", passwordRoute)

app.get("*", (req,res)=>{
    res.send('<h1>Enter the correct route</h1>')
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
})