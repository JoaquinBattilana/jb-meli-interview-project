import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { ProductListType } from '~types/reduxTypes';
import Price from '~components/Price';

function ProductList({
  id,
  title,
  price,
  freeShipping,
  picture,
  state
} : ProductListType) {
  return (
    <Link href="items/[id]" as={`/items/${id}`}>
      <li className={styles['product-container']}>
        <div className={styles['image-container']}>
          <img src={picture} alt="product" className={styles['product-image']} />
        </div>
        <div className={styles['description-container']}>
          <div className={styles['row-container']}>
            <Price {...price} round size="medium" />
            {freeShipping && <span className={styles['free-shipping-dot']} />}
          </div>
          <span className={styles['product-state']}>{state}</span>
          <h2 className={styles['product-title']}>{title}</h2>
        </div>
      </li>
    </Link>
  );
}

export default ProductList;
