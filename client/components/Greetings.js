import React from 'react'
import {connect} from 'react-redux'

import {getGreetings, addGreeting} from '../actions/greetings'

const renderGreeting = (greeting, key) => (
  <h1 key={key}>{greeting.text}</h1>
)

class Greetings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(getGreetings())}>Show Greetings</button>
        {this.props.greetings.map(renderGreeting)}
        <input name="greeting" type="text" onChange={this.handleInput}/>
        <input type="submit" value="submit greeting" onClick={() => this.props.dispatch(addGreeting(this.state.greeting))}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {greetings: state.greetings}
}

export default connect(mapStateToProps)(Greetings)
