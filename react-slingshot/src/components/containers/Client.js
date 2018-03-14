import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import ChatInterface from './ChatInterface';
import '../../styles/Client.scss';

class Client extends React.Component {
  getRecentUsers = () => {
    const currentUser = this.props.user;
    //TODO: get this from users.json
    //this fucntion can go to serverActions
    if (currentUser.name === 'Laura Curley') {
      return [
        {
          name: 'Bob Handler',
          id: 456
        }
      ];
    } else
      return [
        {
          name: 'Laura Curley',
          id: 234
        }
      ];
  };

  render() {
    return (
      <div className="client-window">
        <Sidebar user={this.props.user} recentUsers={this.getRecentUsers()} />
        <ChatInterface
          user={this.props.user}
          recepient={this.props.recepient}
        />
      </div>
    );
  }
}

Client.propTypes = {
  user: PropTypes.object.isRequired,
  recepient: PropTypes.object.isRequired
};

export default Client;
