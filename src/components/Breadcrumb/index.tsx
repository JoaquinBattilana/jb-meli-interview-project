import React, { Fragment } from 'react';
import styles from './styles.module.scss';

interface PropTypes {
  categories: string[]
}

function Breadcrumb({ categories } : PropTypes) {
  return (
    <div className={styles['breadcrumb-container']}>
      {categories?.map((category, index) => (
        <Fragment key={category}>
          <span>{category}</span>
          {index < categories.length - 1 && <span className={styles['breadcrumb-separator']}>&gt;</span>}
        </Fragment>
      )
      )}
    </div>
  );
}

export default Breadcrumb;
