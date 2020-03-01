import React from 'react';
import Navbar from '~components/Navbar';
import styles from './styles.module.scss';

interface PropTypes {
  searchQuery?: string,
  children: any
}

function Layout({ children, searchQuery } : PropTypes) {
  return (
    <>
      <Navbar initialSearchValue={searchQuery} />
      <div className={styles['layout-container']}>
        {children}
      </div>
    </>
  );
}

export default Layout;
