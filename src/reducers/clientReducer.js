import * as types from '../actions/actionTypes';
import USERS from '../constants/users.js';

const initialState = {
  messages: [],
  typingMessage: {},
  users: [],
  pendingImage: {}
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case types.SENDMESSAGE:
      const newState = {
        ...state,
        messages: [...state.messages, action.value]
      };
      return newState;

    case types.TYPING: {
      const { user, message } = action.value;
      const newState = {
        ...state,
        typingMessage: { ...state.typingMessage, [user.id]: { ...message } }
      };

      return newState;
    }

    case types.FETCHUSERS: {
      const newState = {
        ...state,
        users: USERS
      };
      return newState;
    }

    case 'UPLOADIMAGE': {
      const { user, image } = action.value;
      const newState = {
        ...state,
        pendingImage: { ...state.pendingImage, [user.id]: { ...image } }
      };
      //TODO: implement this

      return newState;
    }

    default:
      return state;
  }
}
