import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '~redux/items/actions';
import Breadcrumb from '~components/Breadcrumb';
import Layout from '~components/Layout';
import Product from '~components/Product';
import Loading from '~components/Loading';

interface PropTypes {
  currentItem: any,
  categories: string[],
  itemLoading: boolean
}

function ProductView({ currentItem, categories, itemLoading } : PropTypes) {
  return (
    <Layout>
      <Loading isLoading={itemLoading}>
        <Breadcrumb categories={categories} />
        <Product {...currentItem} />
      </Loading>
    </Layout>
  );
}

ProductView.getInitialProps = async ({ store, query, req }) => {
  const id = query?.id;
  if (req) await store.dispatch(actionCreators.getItemById(id));
  else { store.dispatch(actionCreators.getItemById(id)); }
  return { nameSpaceRequired: [] };
};

const mapStateToProps = state => ({
  currentItem: state.items.currentItem,
  categories: state.items.categories,
  itemLoading: state.items.itemLoading
});

export default connect(mapStateToProps)(ProductView);
