import express from 'express'
import users from './routes/users'
import home from './routes//home'

const router = express.Router()

export default function (options) {
  const { db } = options

  configParams(router, db)
  configRoutes(router, options)

  return router
}

function configParams (router, db) {
  router.param('username', function (req, res, next, username) {
    db.any('select * from users where username = $1', username)
    .then(data => {
      req.user = data
      next()
    })
    .catch(err => {
      next(err)
    })
  })
}

function configRoutes (router, options) {
  router.route('/home')
  .get(home(options).index)

  router.route('/user/:username')
  .get(users(options).getUser)
}
