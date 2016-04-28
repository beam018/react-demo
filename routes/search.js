import express from 'express';

import source from '../source';

/* eslint-disable new-cap */

const router = express.Router();

/* eslint-enable new-cap */

router.get('/', (req, res) => {
  source.get(req)
    .then(data => {
      res.render('index', { data });
    });
});

module.exports = router;
