const express = require('express')
const app = express()
const port = 5000

app.get('/' , (req , res )=>{
    res.send('hello home')
})
app.get('/login' , (req , res )=>{
    res.send('hello login')
})
app.get('/store' , (req , res )=>{
    res.send('hello store')
})

app.listen(port , ()=>{
    console.log(`hello ${port}`);
})