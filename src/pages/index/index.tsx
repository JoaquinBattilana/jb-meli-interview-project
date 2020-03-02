import React from 'react';
import Navbar from '~components/Navbar';
import { NAVBAR_NAMESPACE } from '~constants/nameSpaces';

function Home() {
  return (
    <Navbar />
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: [NAVBAR_NAMESPACE]
});

export default Home;
