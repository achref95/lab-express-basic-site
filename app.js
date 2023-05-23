const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use('/public', express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'))

app.get('^/$|home(.html)?', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('^/$|about(.html)?', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('^/$|works(.html)?', (req, res, next) => {
  res.sendFile(__dirname + '/views/works.html')
})


app.listen(PORT, () => console.log(`App is running on port ${PORT}`))



