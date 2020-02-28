import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { SearchFormType } from '~types/formTypes';
import glassIcon from '~assets/glassIcon.png';
import styles from './styles.module.scss';

interface PropTypes {
  className: string;
}

function SearchForm({ handleSubmit, className } : PropTypes & InjectedFormProps<SearchFormType>) {
  return (
    <form onSubmit={handleSubmit} className={`${className} ${styles.form}`}>
      <button type="submit" className={styles['submit-button']}>
        <img alt="search" src={glassIcon} className={styles.searchButtonImage} />
      </button>
      <Field name="searchField" component="input" className={styles.search} />
    </form>
  );
}

SearchForm.defaultProps = {
  className: ''
};

export default reduxForm({
  form: 'searchForm'
})(SearchForm);
