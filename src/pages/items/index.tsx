import React from 'react';
import { connect } from 'react-redux';
import ProductList from '~components/ProductList';
import Breadcrumb from '~components/Breadcrumb';
import Layout from '~components/Layout';
import actionCreators from '~redux/items/actions';
import { ProductListType } from '~types/reduxTypes';
import Loading from '~components/Loading';
import {NAVBAR_NAMESPACE, PRODUCT_LIST_NAMESPACE } from '~constants/nameSpaces';

interface PropTypes {
  searchQuery?: string,
  categories: string[],
  items: ProductListType[],
  itemsLoading: boolean
}

function ProductsListView({
  searchQuery,
  items,
  categories,
  itemsLoading
} : PropTypes) {
  return (
    <Layout searchQuery={searchQuery}>
      <Loading isLoading={itemsLoading}>
        <Breadcrumb categories={categories} />
        <ProductList items={items} />
      </Loading>
    </Layout>
  );
}

ProductsListView.getInitialProps = async ({ store, query, req }) => {
  const searchQuery = query?.search;
  if (req) await store.dispatch(actionCreators.getItems(searchQuery));
  else { store.dispatch(actionCreators.getItems(searchQuery)); }
  return { searchQuery, namespacesRequired: [NAVBAR_NAMESPACE, PRODUCT_LIST_NAMESPACE] };
};

const mapStateToProps = store => ({
  items: store.items.items,
  itemsLoading: store.items.itemsLoading,
  categories: store.items.categories
});

export default connect(mapStateToProps)(ProductsListView);
