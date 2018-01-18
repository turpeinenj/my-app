import React, { Component } from 'react';
import './App.css';

const UserInfo = props => {
  return(
    <div>
      {props.user.name}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInfo user={ {name: "Jarkko"} }/>
      </div>
    );
  }
}

export default App;
