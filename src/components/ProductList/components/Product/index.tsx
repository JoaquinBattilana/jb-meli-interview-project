import React from 'react';
import styles from './styles.module.scss';

interface PropTypes {
  id: number,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  decimals: number,
  condition: string,
  free_shipping: boolean,
  picture: string
}

function ProductList({
  id,
  title,
  price,
  condition,
  free_shipping,
  picture
} : PropTypes) {
  return (
    <div className={styles['product-container']}>
      <img src={picture} />
      <h2>{title}</h2>
    </div>
  );
}

export default ProductList;
