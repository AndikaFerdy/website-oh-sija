const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const indexFilePath = path.resolve(__dirname, 'dist/index.html');
  res.sendFile(indexFilePath);
});

const staticDirPath = path.resolve(__dirname, 'dist');
app.use(express.static(staticDirPath));

app.listen(port);
