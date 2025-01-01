const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/fb',(req,res)=>{
    res.send('my fb login ')
})
app.get('/login',(req , res)=>{
    res.send("<h1>login page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
