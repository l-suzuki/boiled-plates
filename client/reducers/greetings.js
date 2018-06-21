function greetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    case 'ADD_GREETING':
      return [...state, action.greeting]
    default:
      return state
  }
}

export default greetings
