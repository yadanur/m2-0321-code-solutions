const fs = require('fs');
const fileName = 'data.json';

if (process.argv[2]=="read"){
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    const databases = JSON.parse(data);

    for (const [key, value] of Object.entries(databases.notes)) {
      console.log(key + ": " + value);
    }
  });
}

if (process.argv[2]=="create"){
  fs.readFile(fileName, 'utf8', (err,data)=>{
    if (err) throw err;
    const databases = JSON.parse(data);
    let nextId = ++ databases.nextId;

    const newEntry = process.argv[3];
    databases.notes[nextId] = newEntry;
    jsonDatabases=JSON.stringify(databases,null,2);
    fs.writeFile(fileName,jsonDatabases,'utf8',(err)=>{
      if (err) throw err;
      console.log('New data entry complete');
    });
  });
}

if (process.argv[2] == "update") {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    const databases = JSON.parse(data);

    const keyToBeUpdated = process.argv[3];
    databases.notes[keyToBeUpdated] = process.argv[4];
    jsonDatabases = JSON.stringify(databases, null, 2);
    fs.writeFile(fileName, jsonDatabases, 'utf8', (err) => {
      if (err) throw err;
      console.log('Update complete');
    });
  });
}

if (process.argv[2] == "delete") {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    const databases = JSON.parse(data);

    const keyToBeDeleted = process.argv[3];
    delete databases.notes[keyToBeDeleted];
    jsonDatabases = JSON.stringify(databases, null, 2);
    fs.writeFile(fileName, jsonDatabases, 'utf8', (err) => {
      if (err) throw err;
      console.log('Data was deleted');
    });
  });
}
