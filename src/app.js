import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import favicon from 'serve-favicon'

const _bootstrapDir = require.resolve('bootstrap').match(/.*\/node_modules\/[^/]+\//)[0]

const app = express()

module.exports = function (options) {
  const { logger } = options

  app.use(favicon(path.join(__dirname, 'resources', 'images', 'favicon.png')))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use('/css', express.static(path.join(_bootstrapDir, 'dist', 'css')))
  app.use('/view', express.static(path.join(__dirname, 'static')))

  app.on('error', err => {
    logger.error(err)
  })

  return app
}
