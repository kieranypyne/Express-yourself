// dependencies from node
const http = require('http');
const path = require('path');
const ghAvatar = require('gh-avatar');

// dependencies from npm (package.json)
const express = require('express');

// Initialize our app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

ghAvatar('kieranypyne').then(avatar => {
    $('.icon').html('<img src="' + avatar + '" />')
});

// Add a route to our app that renders our index view
app.get('/', function(req, res, next) {
  res.render('index.ejs', { skills: ['HTML/CSS', 'Javascript', 'Hand-to-hand combat'], hobbies: ['Video Games', 'Smooshing pets faces', 'Fighting off the ever encroaching ennui'] });
});

// Set up our server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
