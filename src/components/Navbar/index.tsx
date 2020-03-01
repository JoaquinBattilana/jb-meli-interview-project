import React, { useMemo } from 'react';
import Router from 'next/router';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm';
import { SearchFormType } from '~types/formTypes';
import meliLogoSmall from '~assets/meliLogoSmall.png';

interface PropTypes {
  initialSearchValue?: string
}

function Navbar({ initialSearchValue } : PropTypes) {
  const handleSubmit = (values: SearchFormType) => {
    if (values?.searchField) Router.push(`/items?search=${values.searchField}`);
  };
  const initialValues = useMemo(() => ({
    searchField: initialSearchValue
  }), [initialSearchValue]);

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        src={meliLogoSmall}
        alt="logo"
      />
      <SearchForm initialValues={initialValues} className={styles['search-form']} onSubmit={handleSubmit} />
    </nav>
  );
}

export default Navbar;
