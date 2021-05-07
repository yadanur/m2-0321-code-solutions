const fs = require('fs');

const myNotes = process.argv[2];

fs.writeFile('note.txt', myNotes, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
