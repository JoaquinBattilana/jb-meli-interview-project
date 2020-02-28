import React from 'react';
import Navbar from '~components/Navbar';

interface PropTypes {
  searchQuery?: string
}

function ProductsListView({ searchQuery } : PropTypes) {
  return (
    <Navbar initialSearchValue={searchQuery} />
  );
}

ProductsListView.getInitialProps = ({ query }) => {
  const searchQuery = query?.search;
  return { searchQuery };
};

export default ProductsListView;
