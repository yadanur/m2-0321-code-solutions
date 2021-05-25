const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', function (req, res) {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(express.json()); // app parses the json request body

app.post('/api/grades', function (req, res) {
  const requestObject = req.body;
  requestObject.id = nextId;
  grades[nextId] = requestObject;
  nextId++;
  res.status(201).json(requestObject);
});

app.listen(3000); // app.listen(3000, () => console.log('listening 3000'));
