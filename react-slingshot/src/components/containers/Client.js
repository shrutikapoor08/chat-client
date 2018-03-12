import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import ChatInterface from './ChatInterface';
import '../../styles/Client.scss';

class Client extends React.Component {
  getRecentUsers = () => {
    const currentUser = this.props.user;
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
      // TODO: recentUsers is undefined
      <div className="client-window">
        <Sidebar recentUsers={this.getRecentUsers()} />
        <ChatInterface user={this.props.user} />
      </div>
    );
  }
}

Client.propTypes = {
  user: PropTypes.object.isRequired
};

export default Client;
