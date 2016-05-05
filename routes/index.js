import express from 'express';

import source from '../source';

import reactApp from '../front/main';

/* eslint-disable new-cap */

const router = express.Router();

/* eslint-enable new-cap */

router.get('/', (req, res) => {
  source.get(req)
    .then(data => {
      res.render('index', { data });
    });
});

router.get('/react', (req, res) => {
  source.get(req)
    .then(data => {
      res.render('index2', { reactData: reactApp(data) });
    });
});

module.exports = router;
