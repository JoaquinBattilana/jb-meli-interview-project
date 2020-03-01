import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

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
  freeShipping: boolean,
  picture: string
}

function ProductList({
  id,
  title,
  price,
  condition,
  freeShipping,
  picture
} : PropTypes) {
  return (
    <Link href="items/[id]" as={`/items/${id}`}>
      <div className={styles['product-container']}>
        <img src={picture} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default ProductList;
