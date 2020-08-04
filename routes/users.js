const path = require('path');
const router = require('express').Router();

// eslint-disable-next-line import/no-dynamic-require
const users = require(path.join(__dirname, '../data/users.json'));
const fs = require('fs').promises;

const usersRouter = (req, res) => {
  res.send(users);
};

const userRouter = (req, res) => {
  const { id } = req.params;
  const result = users.find(({ _id }) => _id === id);

  if (!result) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(result);
};

router.get('/', (req, res) => {
  fs.readFile(users, 'utf8')
    .then((routes) => {
      res.send(routes);
    })
    .catch(() => {
      res.status('500').send({ ERROR: 'Данные не найдены' });
    });
});

module.exports = {
  usersRouter,
  userRouter,
};
