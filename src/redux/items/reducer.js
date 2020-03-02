import { actions } from './actions';

const initialState = {
  itemsLoading: false,
  itemsError: null,
  items: [],
  categories: [],
  currentItem: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        itemsLoading: true
      };
    case actions.GET_ITEMS_SUCESS:
      return {
        ...state,
        itemsLoading: false,
        itemsError: null,
        items: action?.payload?.items && [...action.payload.items],
        categories: action?.payload?.categories && [...action.payload.categories]
      };
    case actions.GET_ITEMS_FAIL:
      return {
        ...state,
        itemsLoading: false,
        itemsError: action?.payload
      };
    case actions.GET_ITEM_BY_ID:
      return {
        ...state,
        itemLoading: true
      };
    case actions.GET_ITEM_BY_ID_SUCESS:
      return {
        ...state,
        itemLoading: false,
        itemError: null,
        currentItem: { ...action?.payload?.item },
        categories: action?.payload?.item?.categories
      };
    case actions.GET_ITEM_BY_ID_FAIL:
      return {
        ...state,
        itemLoading: false,
        itemError: action?.payload
      };
    default:
      return state;
  }
}

export default reducer;
