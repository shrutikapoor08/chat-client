import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/clientActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSend = this.onSend.bind(this);
  }

  onSend() {
    this.props.actions.sendMessage('STUFF');
  }

  render() {
    return (
      <div>
        <div> Test </div>
        <button onClick={this.onSend}> Send </button>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.Messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
