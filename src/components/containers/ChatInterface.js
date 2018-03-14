import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as actions from '../../actions/clientActions';
import MessageTextInput from '../MessageTextInput';
import MessageThread from '../MessageThread';
import '../../styles/ChatInterface.scss';

class ChatInterface extends React.Component {
  getMessages = () => {
    return [...this.props.messages];
  };

  onKeyDownHandler = event => {
    //handle enter key
    if (event.keyCode == 13) {
      this.onSend();
      event.target.value = '';
    }
  };

  onSend = () => {
    const { typingMessage, recepient, user } = this.props;
    const timestamp = moment(); //TODO: change this to human readable format
    const typedMessage = typingMessage[user.id];
    const message = {
      timestamp,
      recepient,
      user,
      message: typedMessage
    };
    this.props.actions.sendMessage(message);
    this.props.actions.typingMessage({ user: user, message: null });
  };

  onStartTyping = event => {
    const messageTyped = {
      user: this.props.user,
      message: event.target.value
    };

    this.props.actions.typingMessage(messageTyped);
  };

  render() {
    const placeholderString = `Send a message to ${this.props.recepient.name}`;
    const isReceipientTyping = this.props.typingMessage[this.props.recepient.id]
      ? true
      : false;

    return (
      <div className="chat-interface">
        <div className="recepient-menu">
          <span className="recepient-name">{this.props.recepient.name}</span>
        </div>

        <MessageThread
          user={this.props.user}
          recepient={this.props.recepient}
          exchangedMessages={this.getMessages()}
          isTyping={isReceipientTyping}
        />

        <MessageTextInput
          name="message"
          onChange={this.onStartTyping}
          placeholder={placeholderString}
          onKeyDown={this.onKeyDownHandler}
        />
      </div>
    );
  }
}

ChatInterface.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  recepient: PropTypes.object.isRequired,
  typingMessage: PropTypes.object,
  messages: PropTypes.array
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface);
