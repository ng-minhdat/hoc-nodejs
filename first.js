console.log("This is my first file to learn Node.js")

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/surprise', (req, res) => {
    res.send('I am the man behind this page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})