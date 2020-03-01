import React from 'react';
import { connect } from 'react-redux';
import ProductList from '~components/ProductList';
import Breadcrumb from '~components/Breadcrumb';
import Layout from '~components/Layout';
import actionCreators from '~redux/items/actions';

interface PropTypes {
  searchQuery?: string,
  categories: string[],
  items: any
}

function ProductsListView({ searchQuery, items, categories } : PropTypes) {
  return (
    <Layout searchQuery={searchQuery}>
      <Breadcrumb categories={categories} />
      <ProductList items={items} />
    </Layout>
  );
}

ProductsListView.getInitialProps = async ({ store, query }) => {
  const searchQuery = query?.search;
  await store.dispatch(actionCreators.getItems(searchQuery));
  return { searchQuery, nameSpaceRequired: [] };
};

const mapStateToProps = store => ({
  items: store.items.items,
  categories: store.items.categories
});

export default connect(mapStateToProps)(ProductsListView);
