import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles/global'
import Main from './Main';


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Wine</title>
      </Head>

      <main>
        <Main />
        <GlobalStyle />
      </main>
    </div>
  );
};

export default Home;
