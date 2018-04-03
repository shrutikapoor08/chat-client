import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageThread = ({ exchangedMessages, recepient, user, isTyping }) => {
  return (
    <div className="message-thread">
      {exchangedMessages.length === 0 && (
        <div>
          This is the beginning of your conversation with {recepient.name}
        </div>
      )}

      {exchangedMessages.length !== 0 && (
        <div>
          {exchangedMessages.map(message => (
            <Message
              key={message.timestamp}
              content={message}
              recepient={message.recepient}
              user={user}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      )}

      {isTyping && <div className="isTyping">...</div>}
    </div>
  );
};

const { array, object, bool } = PropTypes;

MessageThread.propTypes = {
  exchangedMessages: array.isRequired,
  recepient: object,
  user: object,
  isTyping: bool
};

export default MessageThread;
