import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './styles.module.scss';

function SearchForm({ handleSubmit, className }) {
  return (
    <form onSubmit={handleSubmit} className={`${className} ${styles.form}`}>
      <button type="submit" className={styles['submit-button']}>
        <img alt="search" src="static/assets/glass.png" className={styles.searchButtonImage} />
      </button>
      <Field name="searchField" component="input" className={styles.search} />
    </form>
  );
}

export default reduxForm({
  form: 'searchForm'
})(SearchForm);
