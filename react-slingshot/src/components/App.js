import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/clientActions';
import MessageTextInput from './MessageTextInput';

class App extends React.Component {
  onSend = () => {
    const { typingMessage } = this.props;
    this.props.actions.sendMessage(typingMessage);
  };

  onStartTyping = event => {
    //rename action to messageBeingTyped
    this.props.actions.typingMessage(event.target.value);
  };

  render() {
    return (
      <div>
        <div> Test </div>
        <MessageTextInput
          name="message"
          onChange={this.onStartTyping}
          placeholder="Send a message to Rob"
          value={this.props.typingMessage}
          onSend={this.onSend}
        />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  typingMessage: PropTypes.string,
  messages: PropTypes.string
};

function mapStateToProps(state) {
  return {
    messages: state.clientReducer.messages,
    typingMessage: state.clientReducer.typingMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
