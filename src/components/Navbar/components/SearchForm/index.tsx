import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { SearchFormType } from '~types/formTypes';
import styles from './styles.module.scss';

interface PropTypes {
  className: string;
}

function SearchForm({ handleSubmit, className } : PropTypes & InjectedFormProps<SearchFormType>) {
  return (
    <form onSubmit={handleSubmit} className={`${className} ${styles.form}`}>
      <button type="submit" className={styles['submit-button']}>
        <img alt="search" src="static/assets/glass.png" className={styles.searchButtonImage} />
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
