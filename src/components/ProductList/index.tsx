import React from 'react';
import { ProductListType } from '~types/reduxTypes';
import { PRODUCT_LIST_NAMESPACE } from '~constants/nameSpaces';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '~config/i18n';
import Product from './components/Product';
import styles from './styles.module.scss';


interface PropTypes {
  items: ProductListType[]
}

function ProductList({ items, t } : PropTypes & WithTranslation) {
  return (
    <ul className={styles['products-list']}>
      {items?.map(item => <Product key={item.id} {...item} />)}
      {!items?.length && <p className={styles['empty-results']}>{t('empty_product_list')}</p>}
    </ul>
  );
}

export default withTranslation(PRODUCT_LIST_NAMESPACE)(ProductList);
