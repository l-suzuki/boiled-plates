const express = require('express')
const router = express.Router()

const greetingsDb = require('../db/greeting')

router.get('/', (req, res) => {
  greetingsDb.getGreetings()
    .then(greetings => {
      res.json(greetings)
    })
})

router.post('/', (req, res) => {
  greetingsDb.addGreeting(req.body)
    .then(greeting => {
      res.json(greeting)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
