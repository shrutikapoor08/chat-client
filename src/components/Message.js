import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import '../styles/ChatInterface.scss';

const Message = ({ content, recepient, user }) => {
  const message = content.message;
  const image = content.image;

  return (
    <div className="message-text">
      <div className={user.id === recepient.id ? 'received' : 'sent'}>
        <div>{message}</div>
        {!_.isEmpty(image) && (
          <div className="message-image-container">
            <img
              src={image.imageSrc}
              alt={image.imageTitle}
              className="message-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const { string, object } = PropTypes;

Message.propTypes = {
  content: object,
  recepient: object,
  user: object,
  sender: object,
  timestamp: object
};

export default Message;
