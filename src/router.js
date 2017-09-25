import express from 'express'
import index from './index'

const router = express.Router()

export default function getRouter (options) {
  router.route('/index')
  .get(index(options).index)

  return router
}
