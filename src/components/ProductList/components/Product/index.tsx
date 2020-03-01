import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import Link from 'next/link';
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
      <li className={styles['product-container']}>
        <img src={picture} alt="product" className={styles['product-image']} />
        <div>
          <span>{getSymbolFromCurrency(price.currency)}</span>
          <span>{price.amount}</span>
          <sup>{price.decimals ? price.decimals : '00'}</sup>
          {freeShipping && <span className={styles['free-shipping-dot']} />}
        </div>
        <h2 className={styles['product-title']}>{title}</h2>
      </li>
    </Link>
  );
}

export default ProductList;
