import React from 'react';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm';

function Navbar() {
  return (
    <nav className={styles.navbarstyle}>
      <img
        className={styles.logo}
        src="https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/logo__small@2x.png"
        alt="logo"
      />
      <SearchForm className={styles.form} />
    </nav>
  );
}

export default Navbar;
