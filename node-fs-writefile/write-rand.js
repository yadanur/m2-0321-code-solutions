const fs = require('fs');

const randomNumber = Math.floor(Math.random() * 100);
ranNum=randomNumber.toString();

fs.writeFile('random.txt', ranNum, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
