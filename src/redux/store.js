import { createStore } from 'redux';

function testReducer(state = { foo: '' }, action) {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload };
    default:
      return state;
  }
}

const makeStore = (initialState) => createStore(testReducer, initialState);

export default makeStore;
