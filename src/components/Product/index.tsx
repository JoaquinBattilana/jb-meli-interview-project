import React from 'react';
import styles from './styles.module.scss';
import { ProductDetailType } from '~types/reduxTypes';
import Price from '~components/Price';

function Product({
  picture,
  title,
  description,
  condition,
  soldQuantity,
  price
} : ProductDetailType) {
  return (
    <div className={styles['product-container']}>
      <img src={picture} alt="product" className={styles['product-image']} />
      <section className={styles['product-data-container']}>
        <label className={styles['product-condition']}>{condition}</label>
        <label className={styles['product-quantity-sold']}>{`${soldQuantity} vendidos`}</label>
        <h1 className={styles['product-title']}>{title}</h1>
        <Price {...price} size="big" />
        <button type="button" className={styles['product-buy-button']}>COMPRAR</button>
      </section>
      <section className={styles['product-description-container']}>
        <h2>Descripcion del producto</h2>
        <p className={styles['product-description-text']}>{description}</p>
      </section>
    </div>
  );
}

export default Product;
