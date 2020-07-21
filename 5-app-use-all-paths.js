const express = require('express');
const app = express();

const data = [1, 2, 3, 4, 5];

const indexExists = (req, res, next) => {
  const index = req.params.index;
  if (data[index]) {
    next();
  } else {
    res.status(404).send();
  }
};

// Add your code below:
app.use('/data/:index', indexExists)


// Add your code above

app.get(indexExists, (req, res, next) => {
  res.send(data[req.params.index]);
});

app.put(indexExists, (req, res, next) => {
  data[req.params.index] = req.body.number;
  res.send(data[req.params.index]);
});

app.delete(indexExists, (req, res, next) => {
  data.splice(req.params.index, 1);
  res.status(204).send();
});

app.get('/', (req, res, next) => {
  res.send(data);
});
