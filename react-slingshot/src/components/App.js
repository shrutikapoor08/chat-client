import React from 'react';
import Client from './containers/Client';
import '../styles/App.scss';

class App extends React.Component {
  getUserLaura = () => {
    const userLaura = {
      id: 234,
      name: 'Laura Curley'
    };
    return userLaura;
  };

  getUserBob = () => {
    const userLaura = {
      id: 456,
      name: 'Bob Handler'
    };
    return userLaura;
  };

  render() {
    return (
      <div>
        <div>
          <h1>Welcome to Client Chat! </h1>
        </div>
        <div className="chat-window">
          <Client user={this.getUserLaura()} />
          <Client user={this.getUserBob()} />
        </div>
      </div>
    );
  }
}

export default App;
