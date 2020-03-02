import React from 'react';
import { NAVBAR_NAMESPACE } from '~constants/nameSpaces';
import Layout from '~components/Layout';

function Home() {
  return (
    <Layout />
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: [NAVBAR_NAMESPACE]
});

export default Home;
