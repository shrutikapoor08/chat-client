import React from 'react';
import Client from './containers/Client';
import '../styles/App.scss';

class App extends React.Component {
  //TODO: move this to serverActions and use as an action
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
      <div className="chat-window">
        <Client user={this.getUserLaura()} recepient={this.getUserBob()} />
        <Client user={this.getUserBob()} recepient={this.getUserLaura()} />
      </div>
    );
  }
}

export default App;
