import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const language = ctx?.res?.locals?.language;
    return { ...initialProps, language };
  }

  render() {
    const { language } = this.props;
    return (
      <html lang={language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
