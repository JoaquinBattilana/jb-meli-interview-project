import React from 'react';
import Router from 'next/router';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm';
import { SearchFormType } from '~types/formTypes';
import meliLogoSmall from '~assets/meliLogoSmall.png';

function Navbar() {
  const handleSubmit = (values: SearchFormType) => {
    if (values?.searchField) Router.push(`/items?q=${values.searchField}`);
  };

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        src={meliLogoSmall}
        alt="logo"
      />
      <SearchForm className={styles['search-form']} onSubmit={handleSubmit} />
    </nav>
  );
}

export default Navbar;
