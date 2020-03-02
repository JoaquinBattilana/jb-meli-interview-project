import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { withTranslation } from '~config/i18n';
import { SearchFormType } from '~types/formTypes';
import glassIcon from '~assets/glassIcon.png';
import styles from './styles.module.scss';
import { SEARCH_FORM_FIELDS, SEARCH_FORM } from '~constants/forms';
import { NAVBAR_NAMESPACE } from '~constants/nameSpaces';

interface PropTypes {
  className: string;
}

function SearchForm({ handleSubmit, className, t } : PropTypes & InjectedFormProps<SearchFormType>) {
  return (
    <form onSubmit={handleSubmit} className={`${className} ${styles.form}`}>
      <button type="submit" className={styles['submit-button']}>
        <img alt={t('search_button_alt')} src={glassIcon} className={styles.searchButtonImage} />
      </button>
      <Field
        name={SEARCH_FORM_FIELDS.SEARCH_FIELD}
        component="input"
        className={styles.search}
        placeholder={t('search_bar_placeholder')}
      />
    </form>
  );
}

SearchForm.defaultProps = {
  className: ''
};

export default reduxForm({
  form: SEARCH_FORM
})(withTranslation(NAVBAR_NAMESPACE)(SearchForm));
