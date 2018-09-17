import React, { Component } from 'react';
import routing from './routing'

class App extends Component {
  render() {
    return (
      <div className="App">
        { routing }
      </div>
    );
  }
}

export default App;
