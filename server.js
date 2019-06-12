var joke = {
  'joke0': `
  <p> 
  Knock, knock! 
  Whos there? 
  Opportunity! 
  That is impossible. Opportunity doesnt come knocking twice!
  </p>
  `,
  'joke1': `
  <p>
  Knock knock.
   Whos there? 
   An extraterrestrial. 
   Extraterrestrial who? 
   What? how many extra-terrestrials do you know?
   </p>
  `,
  'joke2': `
  <p> 
  Knock knock. Whos there? Beats. Beats who? Beats me.
  </p>
  `
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function randomJoke () {
  var str = 'joke' + getRandomInt(3).toString()
  return joke[str]
}

// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Welcome to the site</h1>' + '<a href="/cuteness">cuteness</a>' + '<p><a href="/random-joke">Random Joke</a></p>'
    )
  } else if (request.url === '/cuteness') {
    response.end('/views')
  } else if (request.url === '/random-joke') {
    response.end(
      '<h1>Random Joke!</h1>' +
      randomJoke() + '<a href="/">Link to home page</a>'
    )
  } else {
    response.end('<h1>URL: ' + request.url + ' Not Found</h1>' + '<a href="/">Home page</a>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080

var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')