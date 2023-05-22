const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use('/', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

app.get('^/$|home(.html)?', (req, res, next) => {
  const filePath = path.join(__dirname, 'views', 'home.html')
  res.sendFile(filePath)
});

app.get('^/$|about(.html)?', (req, res, next) => {
  const filePath = path.join(__dirname, 'views', 'about.html')
  res.sendFile(filePath)
})

app.get('^/$|works(.html)?', (req, res, next) => {
  const filePath = path.join(__dirname, 'views', 'works.html')
  res.sendFile(filePath)
})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`))



