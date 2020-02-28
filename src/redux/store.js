import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  form: formReducer
});

const enhancers = [applyMiddleware(thunk)];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const makeStore = initialState => createStore(rootReducer, initialState, composeEnhancers(...enhancers));
export default makeStore;
