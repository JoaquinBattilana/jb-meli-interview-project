import React from 'react';
import Navbar from '~components/Navbar';

function Home() {
  return (
    <Navbar />
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['navbar']
});

export default Home;
