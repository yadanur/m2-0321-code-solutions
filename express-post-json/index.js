const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('api/grades', function (req, res) {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', function (req, res) {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  const name = req.params.name;
  const course = req.params.course;
  const score = req.params.score;
  gradesArray[nextId][name] = name;
  gradesArray[nextId][course] = course;
  gradesArray[nextId][score] = score;
  nextId++;
  res.sendStatus();
});

app.listen(2000);
