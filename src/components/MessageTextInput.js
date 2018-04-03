import React from 'react';
import PropTypes from 'prop-types';

const MessageTextInput = ({ name, onChange, placeholder, onKeyDown }) => {
  return (
    <div>
      <input
        className="textinput"
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

const { string, func } = PropTypes;

MessageTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  onKeyDown: func.isRequired
};

export default MessageTextInput;
