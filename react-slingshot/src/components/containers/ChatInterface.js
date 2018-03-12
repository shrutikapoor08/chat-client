import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/clientActions';
import MessageTextInput from '../MessageTextInput';
import '../../styles/ChatInterface.scss';

class ChatInterface extends React.Component {
  onSend = () => {
    const { typingMessage } = this.props;
    this.props.actions.sendMessage(typingMessage);
  };

  onStartTyping = event => {
    this.props.actions.typingMessage(event.target.value);
  };

  render() {
    const placeholderString = `Send a message to ${this.props.user.name}`;

    return (
      <div className="chat-interface">
        <MessageTextInput
          name="message"
          onChange={this.onStartTyping}
          placeholder={placeholderString}
          value={this.props.typingMessage}
          onSend={this.onSend}
        />
      </div>
    );
  }
}

ChatInterface.propTypes = {
  actions: PropTypes.object.isRequired,
  typingMessage: PropTypes.string,
  messages: PropTypes.string,
  user: PropTypes.object.isRequired
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
