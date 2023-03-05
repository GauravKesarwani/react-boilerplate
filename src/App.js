import React from 'react';

class App extends React.Component {
    // class properties in not part of Javascript spec. We need babel @babel/plugin-proposal dev dependency for it.
    state = {
      count: 0
    }
    render() {
      return (
        <div>
          <h1>Hello World</h1>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
          <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
        </div>
      )
    }
}

export default App;