const path = require('path');

const cardsRouter = (req, res) => {
  const cards = require(path.join(__dirname, '../data/cards.json'));
  res.send(cards);
};

module.exports = { cardsRouter };
