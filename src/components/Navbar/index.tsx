import React, { useMemo } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { WithTranslation } from 'next-i18next';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm';
import { SearchFormType } from '~types/formTypes';
import { withTranslation } from '~config/i18n';
import meliLogoSmall from '~assets/meliLogoSmall.png';
import { NAVBAR_NAMESPACE } from '~constants/nameSpaces';

interface PropTypes {
  initialSearchValue?: string
}

function Navbar({ initialSearchValue, t } : PropTypes & WithTranslation) {
  const handleSubmit = (values: SearchFormType) => {
    if (values?.searchField) Router.push({ pathname: '/items', query: {search: values.searchField}})
  };
  const initialValues = useMemo(() => ({
    searchField: initialSearchValue
  }), [initialSearchValue]);
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <img
            className={styles.logo}
            src={meliLogoSmall}
            alt={t('navbar_logo')}
          />
        </a>
      </Link>
      <SearchForm initialValues={initialValues} className={styles['search-form']} onSubmit={handleSubmit} />
    </nav>
  );
}

export default withTranslation(NAVBAR_NAMESPACE)(Navbar);
