// const express = require('express');
// const port = 3000;
// const app = express();
// const customers = require('./customers.json');
const [express, port, customers] =
  [require('express'), 3000, require('./customers.json')];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(customers);
});

app.get('/:id', (req, res) => {
  const user = customers.filter(u => u.id === +req.params.id);
  res.send(user);
});

app.post('/', (req, res) => {
  const newCustomer = (req.body);
  customers.push(newCustomer);
  res.send(newCustomer);
});

app.delete('/:id', (req, res) => {
  const indexToRemove = customers.filter(c => c.id === req.params.id);
  customers.splice(indexToRemove, 1)
  res.send(customers);
});

app.put('/:id', (req, res) => {
  const updatedCustomer = req.body;
  const indexToRemove = customers.filter(c => c.id === req.params.id);
  customers.splice(indexToRemove, 1, updatedCustomer);
  res.send(updatedCustomer);
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});