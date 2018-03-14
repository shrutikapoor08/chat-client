import * as types from '../actions/actionTypes';

const initialState = {
  messages: '',
  typingMessage: ''
};

export default function serverReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    default:
      return state;
  }
}
