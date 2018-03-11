import React from 'react';
import PropTypes from 'prop-types';

const MessageTextInput = ({ name, value, onChange, placeholder, onSend }) => {
  return (
    <div>
      <input
        className="small"
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <input type="submit" onClick={onSend} value="Send" />
    </div>
  );
};

const { string, func } = PropTypes;

MessageTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
  onSend: func.isRequired
};

export default MessageTextInput;
