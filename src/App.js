import React, { Component } from 'react';
import AgeComponent from "./components/Age";
import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    const age = 10;
    let users = [
      {id: 1, name: "bashir", age: 30},
      {id: 2, name: "mohammed", age: 20},
      {id: 3, name: "houssam", age: 25},
    ];

    let guests = [
      {id: 1, name: "tony", age: 5},
      {id: 2, name: "ahmad", age: 8},
    ];

    return (
      <div className="App">
        <AgeComponent age={age} />
        <AgeComponent age={3} />
        <UsersList users={users} />
        <UsersList users={guests} />
      </div>
    );
  }
}

export default App;
