import React from 'react';
import Client from './containers/Client';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/clientActions';
import '../styles/App.scss';

class App extends React.Component {
  componentDidMount = () => {
    this.props.actions.fetchUsers();
  };

  getUserLaura = () => {
    const idLaura = 234;
    return this.props.users.find(user => user.id === idLaura);
  };

  getUserBob = () => {
    const idBob = 456;
    return this.props.users.find(user => user.id === idBob);
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

App.propTypes = {
  actions: PropTypes.object,
  users: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
