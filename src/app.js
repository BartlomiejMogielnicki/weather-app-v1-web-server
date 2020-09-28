const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'John Smith',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'John Smith',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'This is a test message on the help page.',
  });
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
