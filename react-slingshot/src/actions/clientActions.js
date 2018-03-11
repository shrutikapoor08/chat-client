import * as types from './actionTypes';

export function sendMessage(message) {
  return {
    type: types.SENDMESSAGE,
    value: message
  };
}
