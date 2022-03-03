const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 5000;

console.log(process);

if (!process.env.PORT) {
  console.error('ERROR: No PORT specified');
  throw new Error('PORT is not defined');
}

app.listen(port, () => {
  const host = 'localhost';
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}! ${host}`);
});
