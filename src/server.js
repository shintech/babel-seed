import path from 'path'
import http from 'http'
import logger from 'winston'
import chalk from 'chalk'
import init from './db'
import config from './config'
import {getStatusCodeStyle} from 'shintech-utils'

const _pkg = require(path.join(path.dirname(__dirname), 'package.json'))

const app = require('./app')({
  logger: logger
})

const server = http.Server(app)

const port = process.env['PORT']
const environment = process.env['NODE_ENV']

const db = init({
  logger: logger,
  environment: environment,
  config: config
})

const router = require('./router')({
  logger: logger,
  db: db
})

app.use('/api', router)

app.use(function (req, res) {
  res.status(400)
  .json({
    status: 'error',
    message: '404: Not Found'
  })
})

server.on('request', (req, res) => {
  const status = getStatusCodeStyle(res.statusCode, req.method)
  logger[status.level](`${status.code} - ${status.method} => ${req.url} ${status.message}`)
})

server.on('listening', () => {
  logger.info(`${chalk.bgBlack.cyan(_pkg.name)} version ${chalk.bgBlack.yellow(_pkg.version)} is listening on port ${chalk.bgBlack.green(port)}...`)
})

server.listen(port)
