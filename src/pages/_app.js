import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { appWithTranslation } from '~config/i18n';
import createStore from '~redux/store';
import { DEFAULT_TITLE, DEFAULT_TITLE_KEY } from '~constants';
import '~scss/application.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head key={DEFAULT_TITLE_KEY}>
          <title>{DEFAULT_TITLE}</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(appWithTranslation(MyApp));
