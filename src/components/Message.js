import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ChatInterface.scss';

const Message = ({ content, recepient, user }) => {
  return (
    <div className="message-text">
      <div className={user.id === recepient.id ? 'received' : 'sent'}>
        {content}
      </div>
    </div>
  );
};

const { string, object } = PropTypes;

Message.propTypes = {
  content: string,
  recepient: object,
  user: object,
  sender: object,
  timestamp: object
};

export default Message;
