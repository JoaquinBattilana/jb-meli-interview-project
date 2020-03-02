import React from 'react';
import { ProductListType } from '~types/reduxTypes';
import Product from './components/Product';
import styles from './styles.module.scss';

interface PropTypes {
  items: ProductListType
}

function ProductList({ items } : any) {
  return (
    <ul className={styles['products-list']}>
      {items?.map(item => <Product key={item.id} {...item} />)}
    </ul>
  );
}

export default ProductList;
