// https://github.com/namratarane20/github-action.git
const express = require('express');
const app = express();
const port = 3000;


// Middleware to parse JSON body
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// GET route with params
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// POST route with JSON body
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
