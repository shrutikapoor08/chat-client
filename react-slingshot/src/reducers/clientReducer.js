import * as types from '../actions/actionTypes';

const initialState = {
  messages: [],
  typingMessage: {}
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
        typingMessage: { [user.id]: message }
      };
      return newState;

    default:
      return state;
  }
}
