import * as types from '../actions/actionTypes';

const initialState = {
  messages: '',
  typingMessage: ''
};

export default function clientReducer(state = initialState, action) {
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

//
// messages: {
// timestamp : {
//   sender: {name: 'Bob', id: 123}
//   recepient: {name: 'Laura', id: 456}
//   timestamp: timestamp,
//   contents: 'sup',
// }
// }
