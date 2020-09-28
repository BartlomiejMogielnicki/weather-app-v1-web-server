const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andrew',
      age: 27,
    },
    {
      name: 'Sarah',
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Warsaw',
    forecast: 'Sunny. Temperature is 15 degress.',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
