import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import ChatInterface from './ChatInterface';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/clientActions';
import '../../styles/Client.scss';

class Client extends React.Component {
  getRecentUsers = () => {
    const { user, users } = this.props;
    const recentUsers = [];
    const recentlyMessagedIds = user ? user.recentlyMessaged : [];
    recentlyMessagedIds.forEach(recentId =>
      users.forEach(user => {
        if (user.id === recentId) recentUsers.push(user);
      })
    );
    return recentUsers;
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

function mapStateToProps(state) {
  return {
    users: state.clientReducer.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

Client.propTypes = {
  actions: PropTypes.object,
  users: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);
