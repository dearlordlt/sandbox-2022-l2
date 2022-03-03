const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  const host = 'localhost';
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port 3000! ${host}`);
});
