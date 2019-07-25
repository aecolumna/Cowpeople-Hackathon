


var express = require('express')
var app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
var port = process.env.PORT || 8080

app.get('/', function (request, response) {
  response.render('pages/index')
})

app.get('/login', function (request, response) {
  response.render('pages/login')
})

app.get('/chat', function (request, response) {
  response.render('pages/chat')
})

app.get('/journal', function (request, response) {
  response.render('pages/journal')
})


app.get('/aboutus', function (request, response) {
  response.render('pages/aboutus')
})

app.listen(port)

console.log('Server running at http://localhost:' + port + '/')
