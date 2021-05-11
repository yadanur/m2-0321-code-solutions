const express = require('express');
const app = express();
app.use(function(req, res){
  console.log(req.method);
  res.send('Hello Expresso');
});
app.listen(3000);
