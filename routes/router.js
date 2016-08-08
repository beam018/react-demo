import express from 'express'

import source from '../source'

import renderedCore from '../renderCore'

import contentStub from '../data/contentStub'

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

router.get('/about', (req, res) => {
  if (req.xhr || req.query.jsondump) {
    res.send(contentStub)
  }

  res.send(contentStub)
  // TODO: server rendering
})

module.exports = router
