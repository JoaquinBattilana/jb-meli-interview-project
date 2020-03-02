import React from 'react';
import { WithTranslation } from 'next-i18next';
import { ProductDetailType } from '~types/reduxTypes';
import Price from '~components/Price';
import { withTranslation } from '~config/i18n';
import styles from './styles.module.scss';

function Product({
  picture,
  title,
  description,
  condition,
  soldQuantity,
  price,
  t
} : ProductDetailType & WithTranslation) {
  return (
    <div className={styles['product-container']}>
      <img src={picture} alt="product" className={styles['product-image']} />
      <section className={styles['product-data-container']}>
        <label className={styles['product-condition']}>
          {`${t(`product_state_${condition}`)} - ${t('product_quantity_sold', { n: soldQuantity })}`}
        </label>
        <h1 className={styles['product-title']}>{title}</h1>
        <Price {...price} size="big" />
        <button type="button" className={styles['product-buy-button']}>{t('product_buy_button')}</button>
      </section>
      <section className={styles['product-description-container']}>
        <h2 className={styles['product-description-title']}>{t('product_description_title')}</h2>
        <p className={styles['product-description-text']}>{description}</p>
      </section>
    </div>
  );
}

export default withTranslation('product')(Product);
