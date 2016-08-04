import express from 'express'

import source from '../source'

import renderedCore from '../renderCore'

const router = express.Router();

router.get('/', (req, res) => {
  source
    .get(req)
    .then(data => res.render('layout', {
      html: renderedCore,
      state: JSON.stringify(data)
    }));
});

module.exports = router;
