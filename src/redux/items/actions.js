import itemsService from '~services/itemsService';

export const actions = {
  GET_ITEMS: '@@ITEMS/GET_ITEMS',
  GET_ITEMS_SUCESS: '@@ITEMS/GET_ITEMS_SUCESS',
  GET_ITEMS_FAIL: '@@ITEMS/GET_ITEMS_FAIL'
};

const actionsCreators = {
  getItems: query => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await itemsService.getItems(query);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAIL,
        payload: response?.error
      });
    }
  }
};

export default actionsCreators;
