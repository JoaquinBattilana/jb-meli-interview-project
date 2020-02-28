import React from 'react';
import { connect } from 'react-redux';
import Navbar from '~components/Navbar';
import ProductList from '~components/ProductList';
import actionCreators from '~redux/items/actions';
import styles from './styles.module.scss';

interface PropTypes {
  searchQuery?: string,
  items: any
}

function ProductsListView({ searchQuery, items } : PropTypes) {
  return (
    <>
      <Navbar initialSearchValue={searchQuery} />
      <div className={styles['products-container']}>
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
  items: store.items.items
});

export default connect(mapStateToProps)(ProductsListView);
