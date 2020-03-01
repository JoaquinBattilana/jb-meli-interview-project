import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import styles from './styles.module.scss';

interface PropTypes {
  currency: string,
  amount: number,
  decimals: number,
  round?: boolean,
  size: string
}

function Price({
  currency,
  amount,
  decimals,
  round,
  size
} : PropTypes) {
  const price = round && decimals ? amount + 1 : amount;
  return (
    <div className={styles[`price-${size}`]}>
      <span>{getSymbolFromCurrency(currency)}</span>
      <span>{price.toLocaleString('de')}</span>
      {!round && <sup>{decimals || '00'}</sup>}
    </div>
  );
}

export default Price;
