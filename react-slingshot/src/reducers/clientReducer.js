import * as types from '../actions/actionTypes';

export default function clientReducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case types.SENDMESSAGE:
      newState = { messages: action.value, ...state };
      return newState;

    case types.TYPING:
      newState = { ...state };
      return newState;

    default:
      return state;
  }
}
