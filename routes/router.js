import express from 'express'

import source from '../source'

import renderedCore from '../renderCore'

const router = express.Router()

router.get('/', (req, res) => {
  source
    .get(req)
    .then(data => {
      if (req.xhr || req.query.jsondump) {
        res.json(data.results)
        res.end()
      }

      res.render('layout', {
        html: renderedCore,
        state: JSON.stringify(data)
      })
    })
})

module.exports = router
