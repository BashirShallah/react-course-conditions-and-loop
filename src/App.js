import React, { Component } from 'react';

class App extends Component {
  render() {
    const age = 10;
    let ageTemplate = '';

    if(age > 5){
      ageTemplate = <h1>you are older than 5</h1>;
    } else {
      ageTemplate = <p>you are not older than 5</p>;
    }

    return (
      <div className="App">
        {ageTemplate}
      </div>
    );
  }
}

export default App;
