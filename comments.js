// Create web server
// npm install express
// npm install body-parser

// Load the express module
const express = require('express');

// Create an express app
const app = express();

// Load the body-parser module
const bodyParser = require('body-parser');

// Load the comments module
const comments = require('./comments');

// Add the body-parser middleware to the app
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// POST /comments
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.addComment(username, comment);
  res.status(201).end();
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with:
// node comments.js

// Test the server with:
// curl http://localhost:3000/comments
// curl -X POST -d '{"username": "Alice", "comment": "I love it!"}' -H 'Content-Type: application/json' http://localhost:3000/comments
// curl http://localhost:3000/comments

// npm install request
// const request = require('request');
// request('http://localhost:3000/comments', (err, res, body) => {
//   console.log(body);
// });
// request.post('http://localhost:3000/comments', { json: { username: 'Alice', comment: 'I love it!' } }, (err, res, body) => {
//   console.log(res.statusCode);
// });

// npm install mocha
// npm install chai
// npm install supertest
// npm install --save-dev nodemon
// npm install --save-dev eslint
// npm install --save-dev eslint-config-airbnb-base
// npm install --save-dev eslint-plugin-import
// npm install --save-dev eslint-plugin-mocha
// npm install --save-dev eslint-plugin-node
// npm install --save-dev eslint-plugin-promise
// npm install --save-dev eslint-plugin-standard
// npm install --save-dev eslint-plugin-chai-expect

// npm install --save-dev istanbul
// npm install --save-dev mocha-lcov-reporter

// npm install --save-dev sinon
// npm install --save-dev sinon-chai

// npm install