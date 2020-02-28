import { actions } from './actions';

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  categories: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_ITEMS_SUCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...action?.payload?.items],
        categories: [...action?.payload?.categories]
      };
    case actions.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payload
      };
    default:
      return state;
  }
}

export default reducer;
