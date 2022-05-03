module.exports = (router) => {
  const data = require('../data/challenge.json');

  router.get('/hiking/data', (req, res) => {
    res.status(200).send(data);
  });
};
