import React from 'react';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm';

function Navbar() {
  return (
    <nav className={styles.navbarstyle}>
      <img
        className={styles.logo}
        src="static/assets/meli_logo_navbar.png"
        alt="logo"
      />
      <SearchForm className={styles.form} />
    </nav>
  );
}

export default Navbar;
