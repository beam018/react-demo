import express from 'express'

import source from './source'
import logger from './logger'

import { renderToString } from 'react-dom/server'

import { getServer } from './front/core'

import { match } from 'react-router'
import routes from './front/routes'

const router = express.Router()

function getPageHtml(html, state) {
  // https://github.com/facebook/react/issues/1035
  return `<html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>Slashpixels</title>
      <link rel="stylesheet" href="/css/style.css">
    </head>

    <body>
      <div id="root">${html}</div>
      <script>window.__PRELOADED_STATE__ = ${state}</script>
      <script src="/js/bundle.js"></script>
    </body>

  </html>`
}

router.get('*', (req, res) => {
  if (req.xhr || req.query.jsondump) {
    source
      .get(req)
      .then(data => {
        return res.json({
          ...data.results,
          page: req.page
        })
      })
  }

  match({ routes, location: req.url }, (err, redirLocation, renderProps) => {
    if (err) {
      logger.error(err.message)

      return res.send(500, err.message)
    }

    if (redirLocation) {
      return res.redirect(302, redirLocation.pathname + redirLocation.search)
    }

    if (!renderProps) {
      return res.send(404, 'Not found')
    }

    source
      .get(req)
      .then(data => {
        res.send(200, getPageHtml(
          renderToString(getServer(renderProps, data)),
          JSON.stringify(data))
        )
      })
  })
})

module.exports = router
