import request from 'superagent'

export const receiveGreetings = (greetings) => {
  return {
    type: 'RECEIVE_GREETINGS',
    greetings
  }
}

export const addGreetingAction = (greeting) => {
  return {
      type: 'ADD_GREETING',
      greeting
  }
}

export function getGreetings () {
  return (dispatch) => {
    request
      .get(`/api/greetings`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveGreetings(res.body))
      })
  }
}

export function addGreeting (greeting) {
  return (dispatch) => {
    request
      .post(`/api/greetings`)
      .send(greeting)
      .end((err, res)=> {
        if(err) {
          console.log(err.message)
          return
        }
        dispatch(addGreetingAction(res.body))
      })
  }
}
