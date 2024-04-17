const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Demo app by Manas Kumar Jena');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
