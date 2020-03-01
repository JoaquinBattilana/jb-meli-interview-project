import React from 'react';
import { connect } from 'react-redux';
import Navbar from '~components/Navbar';
import ProductList from '~components/ProductList';
import Breadcrumb from '~components/Breadcrumb';
import actionCreators from '~redux/items/actions';
import styles from './styles.module.scss';

interface PropTypes {
  searchQuery?: string,
  categories: string[],
  items: any
}

function ProductsListView({ searchQuery, items, categories } : PropTypes) {
  return (
    <>
      <Navbar initialSearchValue={searchQuery} />
      <div className={styles['products-container']}>
        <Breadcrumb categories={categories} />
        <ProductList items={items} />
      </div>
    </>
  );
}

ProductsListView.getInitialProps = async ({ store, query }) => {
  const searchQuery = query?.search;
  await store.dispatch(actionCreators.getItems(searchQuery));
  return { searchQuery };
};

const mapStateToProps = store => ({
  items: store.items.items,
  categories: store.items.categories
});

export default connect(mapStateToProps)(ProductsListView);
