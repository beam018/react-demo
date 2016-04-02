import express from 'express';

import source from '../source';

const router = express.Router();

router.get('/', function(req, res) {
  source.get(req)
    .then(data => {
      res.render('index', { data });
    });
});

module.exports = router;
