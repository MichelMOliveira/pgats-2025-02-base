const express = require('express');
const app = express();

app.use(express.json());

app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Test User' });
});

module.exports = app;

"scripts": {
  "test": "mocha tests/**/*.test.js"
}