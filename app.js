const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
})