console.log("This is my first file to learn Node.js")

// const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewEngine';
const app = express()
const port = 3000

configViewEngine(app)

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/surprise', (req, res) => {
    res.send('I am the man behind this page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})