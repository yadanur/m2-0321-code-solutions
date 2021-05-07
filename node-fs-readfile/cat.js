const fs = require('fs');

var fileList = [];
for (let i = 2; i < process.argv.length; i++) {
  fileList.push(process.argv[i]);
}

function readAllFiles(list) {
  if (list.length == 0) {
    return;
  }
  console.log('reading ', list[0]);
  return fs.readFile(list[0],'utf8', (err, data)=>{
    if (err) throw (err);
    console.log(data);
    readAllFiles(list.slice(1, list.length))
  })
}

readAllFiles(fileList);
