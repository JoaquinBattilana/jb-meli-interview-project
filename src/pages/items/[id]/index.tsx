import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '~redux/items/actions';
import Breadcrumb from '~components/Breadcrumb';
import Layout from '~components/Layout';
import Product from '~components/Product';

interface PropTypes {
  currentItem: any,
  categories: string[]
}

function ProductView({ currentItem, categories } : PropTypes) {
  return (
    <Layout>
      <Breadcrumb categories={categories} />
      <Product {...currentItem} />
    </Layout>
  );
}

ProductView.getInitialProps = async ({ store, query }) => {
  const id = query?.id;
  await store.dispatch(actionCreators.getItemById(id));
  return { nameSpaceRequired: [] };
};

const mapStateToProps = state => ({
  currentItem: state.items.currentItem,
  categories: state.items.categories
});

export default connect(mapStateToProps)(ProductView);
