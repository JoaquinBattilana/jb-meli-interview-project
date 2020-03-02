import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import actionCreators from '~redux/items/actions';
import Breadcrumb from '~components/Breadcrumb';
import Layout from '~components/Layout';
import Product from '~components/Product';
import Loading from '~components/Loading';
import { generateProductSchema } from '~utils/schema';
import { PRODUCT_NAMESPACE, NAVBAR_NAMESPACE } from '~constants/nameSpaces';
import { withTranslation } from '~config/i18n';
import Error from '~components/Error';
import { WithTranslation } from 'next-i18next';

interface PropTypes {
  currentItem: any,
  categories: string[],
  itemLoading: boolean,
  itemError: boolean,
  t
}

function ProductView({ currentItem, categories, itemLoading, itemError, t } : PropTypes & WithTranslation) {
  return (
    <>
      {currentItem?.title && (
        <Head>
          <title key="product-head">{currentItem.title}</title>
          {currentItem && !itemLoading && 
          <script type='application/ld+json'>
            {JSON.stringify(generateProductSchema(currentItem))}
          </script> }
        </Head>
      )}
      <Layout>
        <Loading isLoading={itemLoading}>
          <Error hasError={itemError} text={t('product_error')}>
            <Breadcrumb categories={categories} />
            <Product {...currentItem} />
          </Error>
        </Loading>
      </Layout>
    </>
  );
}

ProductView.getInitialProps = async ({ store, query, req }) => {
  const id = query?.id;
  if (req) await store.dispatch(actionCreators.getItemById(id));
  else { store.dispatch(actionCreators.getItemById(id)); }
  return { namespacesRequired: [PRODUCT_NAMESPACE, NAVBAR_NAMESPACE] };
};

const mapStateToProps = state => ({
  currentItem: state.items.currentItem,
  categories: state.items.categories,
  itemLoading: state.items.itemLoading,
  itemError: state.items.itemError
});

export default withTranslation(PRODUCT_NAMESPACE)(connect(mapStateToProps)(ProductView));
