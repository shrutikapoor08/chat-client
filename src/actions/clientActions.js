import * as types from './actionTypes';

export function sendMessage(message) {
  return {
    type: types.SENDMESSAGE,
    value: message
  };
}

export function typingMessage(message) {
  return {
    type: types.TYPING,
    value: message
  };
}
