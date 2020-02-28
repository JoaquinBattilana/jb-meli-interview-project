import React from 'react';
import Product from './components/Product';
import styles from './styles.module.scss';

interface PropTypes {
  items: any
}

function ProductList({ items } : any) {
  return (
    <div className={styles['products-list']}>
      {items.map(item => <Product key={item.id} {...item} />)}
    </div>
  );
}

export default ProductList;
