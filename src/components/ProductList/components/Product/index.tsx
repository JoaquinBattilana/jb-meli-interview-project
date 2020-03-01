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
  freeShipping,
  picture
} : PropTypes) {
  return (
    <Link href="items/[id]" as={`/items/${id}`}>
      <li className={styles['product-container']}>
        <div className={styles['image-container']}>
          <img src={picture} alt="product" className={styles['product-image']} />
        </div>
        <div className={styles['description-container']}>
          <div className={styles['price-container']}>
            <span className={styles['price-symbol']}>{getSymbolFromCurrency(price.currency)}</span>
            <span>{price?.decimals ? (price?.amount + 1).toLocaleString('de') : price.amount}</span>
          </div>
          {freeShipping && <span className={styles['free-shipping-dot']} />}
          <h2 className={styles['product-title']}>{title}</h2>
        </div>
      </li>
    </Link>
  );
}

export default ProductList;
