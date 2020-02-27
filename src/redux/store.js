import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

const makeStore = (initialState) => createStore(rootReducer, initialState);

export default makeStore;
