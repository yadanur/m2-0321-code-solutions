const express = require('express');
const app = express();

// let nextId = 2;
const grades = {
  1: {
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  }
};

app.get('/api/grades', function (req, res) {
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
  /*
  const addName = req.params.name;
  const addCourse = req.params.course;
  const addScore = req.params.score;
  gradesArray[nextId][name] = addName;
  gradesArray[nextId][course] = addCourse;
  gradesArray[nextId][score] = addScore;
  nextId++;
  */
  res.sendStatus();
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('listening 3000'));
