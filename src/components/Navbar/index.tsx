import React from 'react';
import Router from 'next/router';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm';

function Navbar() {
  const handleSubmit = values => {
    if (values?.searchField) Router.push(`/items?q=${values.searchField}`);
  };

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        src="static/assets/meli_logo_navbar.png"
        alt="logo"
      />
      <SearchForm className={styles['search-form']} onSubmit={handleSubmit} />
    </nav>
  );
}

export default Navbar;
