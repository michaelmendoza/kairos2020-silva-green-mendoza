// Simple express server that serves build at port 9000 - requires express installed i.e. npm install express
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
  console.log("Can view webapp in browser on http://localhost:9000/ ")
});