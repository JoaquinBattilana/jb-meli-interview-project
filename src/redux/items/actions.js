export const actions = {
  GET_ITEMS: '@@ITEMS/GET_ITEMS'
};

const actionsCreators = {
  getItems: query => ({
    type: actions.GET_ITEMS,
    payload: query
  })
};

export default actionsCreators;
