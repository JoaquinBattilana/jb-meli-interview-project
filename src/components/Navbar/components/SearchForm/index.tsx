import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import styles from './styles.module.scss';

interface SearchForm {
  searchField: string
}

interface PropTypes {
  className: string;
}

function SearchForm({ handleSubmit, className } : PropTypes & InjectedFormProps<SearchForm>) {
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
