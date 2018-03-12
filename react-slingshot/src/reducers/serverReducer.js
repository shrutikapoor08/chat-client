import * as types from '../actions/actionTypes';

const initialState = {
  messages: '',
  typingMessage: ''
};

export default function serverReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case types.SENDMESSAGE:
      newState = { ...state, messages: action.value };
      return newState;

    case types.TYPING:
      newState = { ...state, typingMessage: action.value };
      return newState;

    default:
      return state;
  }
}
