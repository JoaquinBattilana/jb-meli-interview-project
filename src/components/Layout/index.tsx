import React from 'react';
import Navbar from '~components/Navbar';
import styles from './styles.module.scss';

interface PropTypes {
  searchQuery?: string,
  children?: any
}

function Layout({ children, searchQuery } : PropTypes) {
  return (
    <>
      <Navbar initialSearchValue={searchQuery} />
      <main className={styles['layout-container']}>
        {children}
      </main>
    </>
  );
}

export default Layout;
