const defaultConn = require('./connection')

const getGreetings = (testConn) => {
  const db = testConn || defaultConn
  return db('greetings')
    .select()
}

const addGreeting = (greeting, testConn) => {
  const db = testConn || defaultConn
  return db('greetings')
    .insert(greeting)
}

module.exports = {
  getGreetings,
  addGreeting
}
