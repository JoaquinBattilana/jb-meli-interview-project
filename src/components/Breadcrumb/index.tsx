import React from 'react';
import styles from './styles.module.scss';

interface PropTypes {
  categories: string[]
}

function Breadcrumb({ categories } : PropTypes) {
  return (
    <div className={styles['breadcrumb-container']}>
      {categories?.map((category, index) => {
        return (
          <>
            <span>{category}</span>
            {index < categories.length - 1 && <span className={styles['breadcrumb-separator']}>&gt;</span>}
          </>
        );
      }
      )}
    </div>
  );
}

export default Breadcrumb;
