const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from our app!');
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});