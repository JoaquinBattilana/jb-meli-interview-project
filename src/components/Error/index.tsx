import React from 'react';
import styles from './styles.module.scss';


interface PropTypes {
  text: string,
  children: any,
  hasError: boolean
}

function Error({hasError, text, children } : PropTypes) {
  return(
    hasError ?
      <div className={styles['error-container']} >
        {text}
      </div>
      : children
  );
}

export default Error;
