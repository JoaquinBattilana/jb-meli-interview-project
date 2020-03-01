import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '~redux/items/actions';

function ProductView({ currentItem }) {
  console.log(currentItem);
  return null;
}

ProductView.getInitialProps = async ({ store, query }) => {
  const id = query?.id;
  await store.dispatch(actionCreators.getItemById(id));
  return { nameSpaceRequired: [] };
};

const mapStateToProps = state => ({
  currentItem: state.currentItem
});

export default connect(mapStateToProps)(ProductView);
