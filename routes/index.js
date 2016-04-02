import express from 'express';

import source from '../source';

const router = express.Router();

console.log(source);

/* GET home page. */
router.get('/', function(req, res) {
  source.get()
    .then(data => {
      res.render('index', data);
    });
});

module.exports = router;
