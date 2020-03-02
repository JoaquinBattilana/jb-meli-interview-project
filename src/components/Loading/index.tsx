import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './styles.module.scss';

interface PropTypes {
  isLoading: boolean,
  children: any
}

function Loading({ isLoading, children } : PropTypes) {
  return isLoading ? (
    <div className={styles['loader-style']}>
      <Loader type="TailSpin" />
    </div>
  ) : children;
}

export default Loading;
