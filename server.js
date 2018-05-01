const express = require('express');
const app = express();
const data = require('./data.json');


const urlLogger = (request, response, next) => {
  console.log('REquest URL:', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('DAteTime:', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.use((req, res, next) => res.status(404).send('cand find that'));

app.get('/json', (request, response) => {
  response.status(200).json(data);
});

app.get('/', (request, response) => {

});

app.get('/sunsets', (request, response) => {

});
app.use(express.static('public/sunsets'));

app.listen(3000, () => {
  console.log('express be runnin on localhost:3000')
});
