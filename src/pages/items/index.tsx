import React from 'react';
import { connect } from 'react-redux';
import Navbar from '~components/Navbar';
import actionCreators from '~redux/items/actions';

interface PropTypes {
  searchQuery?: string
}

function ProductsListView({ searchQuery } : PropTypes) {
  return (
    <>
      <Navbar initialSearchValue={searchQuery} />
      <p>{process.env.BASE_API_URL}</p>
    </>
  );
}

ProductsListView.getInitialProps = async ({ store, query }) => {
  const searchQuery = query?.search;
  store.dispatch(actionCreators.getItems(searchQuery));
  return { searchQuery };
};

export default connect()(ProductsListView);
