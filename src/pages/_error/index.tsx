import React from 'react';
import Layout from '~components/Layout';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '~config/i18n';
import { ERROR_NAMESPACE } from '~constants/nameSpaces';
import styles from './styles.module.scss';

function Error({ t } : WithTranslation) {
  return (
    <Layout>
      <h1 className={styles['error-container']}>{t('not_found_error')}</h1>
    </Layout>
  );
}

Error.getInitialProps = async () => ({ namespacesRequired: [ERROR_NAMESPACE] });

export default withTranslation(ERROR_NAMESPACE)(Error);
