import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as actions from '../../actions/clientActions';
import MessageTextInput from '../MessageTextInput';
import MessageThread from '../MessageThread';
import ImageUploader from '../ImageUploader.jsx';
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
    const { typingMessage, recepient, user, pendingImage } = this.props;
    const timestamp = moment(); //TODO: change this to human readable format
    const typedMessage = !!typingMessage[user.id] && typingMessage[user.id];
    const image = pendingImage[user.id];
    const draftMessage = {
      timestamp,
      recepient,
      user,
      image,
      message: typedMessage
    };
    if (this.isMessageValid(draftMessage)) {
      this.props.actions.sendMessage(draftMessage);

      this.props.actions.typingMessage({
        user: user,
        message: null
      });

      this.props.actions.uploadImage({
        user: user,
        image: {}
      });
    }
  };

  isMessageValid = draftMessage => {
    const { image, message } = draftMessage;
    return message.trim().length > 0 || !_.isEmpty(image);
  };

  onStartTyping = event => {
    const { user } = this.props;
    const messageTyped = {
      user: user,
      message: event.target.value
    };

    this.props.actions.typingMessage(messageTyped);
  };

  render() {
    const { user, recepient, typingMessage } = this.props;
    const placeholderString = `Send a message to ${recepient.name}`;
    const isReceipientTyping =
      !!typingMessage[recepient.id] && !!typingMessage[recepient.id].length > 0;

    return (
      <div className="chat-interface">
        <div className="recepient-menu">
          <span className="recepient-name">{recepient.name}</span>
        </div>

        <div className="message-pane">
          <MessageThread
            user={user}
            recepient={recepient}
            exchangedMessages={this.getMessages()}
            isTyping={isReceipientTyping}
          />
        </div>

        <div className="message-input">
          <MessageTextInput
            name="message"
            onChange={this.onStartTyping}
            placeholder={placeholderString}
            onKeyDown={this.onKeyDownHandler}
          />

          <ImageUploader user={user} recepient={recepient} />
        </div>
      </div>
    );
  }
}

ChatInterface.propTypes = {
  actions: PropTypes.object,
  user: PropTypes.object,
  recepient: PropTypes.object,
  typingMessage: PropTypes.object,
  messages: PropTypes.array
};

function mapStateToProps(state) {
  return {
    messages: state.clientReducer.messages,
    typingMessage: state.clientReducer.typingMessage,
    pendingImage: state.clientReducer.pendingImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface);
