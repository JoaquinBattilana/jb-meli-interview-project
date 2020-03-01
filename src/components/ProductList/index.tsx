import React from 'react';
import Product from './components/Product';
import styles from './styles.module.scss';

interface PropTypes {
  items: any
}

function ProductList({ items } : any) {
  return (
    <ul className={styles['products-list']}>
      {items?.map(item => <Product key={item.id} {...item} />)}
    </ul>
  );
}

export default ProductList;
