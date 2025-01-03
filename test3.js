const express = require("express")
const app = express()
const PORT = 3000

app.get( (req,res) => {
    res.send("Hello")
})

app.post( '/customer', (req, res) => {


})

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})


const http = require('http')

http.createServer( '')