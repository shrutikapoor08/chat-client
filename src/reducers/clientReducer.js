import * as types from '../actions/actionTypes';
import USERS from '../constants/users.js';

const initialState = {
  messages: [],
  typingMessage: {},
  users: []
};

export default function clientReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case types.SENDMESSAGE:
      newState = {
        ...state,
        messages: [...state.messages, action.value]
      };
      return newState;

    case types.TYPING:
      const { user, message } = action.value;
      newState = {
        ...state,
        typingMessage: { ...state.typingMessage, [user.id]: message }
      };
      return newState;

    case types.FETCHUSERS:
      newState = {
        ...state,
        users: USERS
      };

      return newState;

    default:
      return state;
  }
}
