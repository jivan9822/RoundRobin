const express = require('express');
const { createGroup } = require('./generate');
const app = express();

app.use(express.json());

app.use('/players', (req, res, next) => {
  const players = req.body.data;
  console.log(players);
  const data = createGroup(players);
  res.send(data);
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
